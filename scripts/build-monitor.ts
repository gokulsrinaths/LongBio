import { performance } from 'perf_hooks';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

interface BuildMetrics {
  timestamp: string;
  duration: number;
  success: boolean;
  errors?: string[];
  warnings?: string[];
  buildId?: string;
}

class BuildMonitor {
  private static readonly METRICS_DIR = '.build-metrics';
  private static readonly THRESHOLD_MS = 10000; // 10 seconds
  private startTime: number;
  private metrics: BuildMetrics;

  constructor() {
    this.startTime = performance.now();
    this.metrics = {
      timestamp: new Date().toISOString(),
      duration: 0,
      success: false,
    };

    // Ensure metrics directory exists
    if (!existsSync(BuildMonitor.METRICS_DIR)) {
      mkdirSync(BuildMonitor.METRICS_DIR);
    }
  }

  public start(): void {
    this.startTime = performance.now();
    console.log('🔄 Build started...');
  }

  public end(success: boolean, errors: string[] = [], warnings: string[] = []): void {
    const duration = performance.now() - this.startTime;
    
    this.metrics = {
      ...this.metrics,
      duration,
      success,
      errors: errors.length > 0 ? errors : undefined,
      warnings: warnings.length > 0 ? warnings : undefined,
    };

    this.saveMetrics();
    this.reportMetrics();
  }

  private saveMetrics(): void {
    const filename = join(
      BuildMonitor.METRICS_DIR,
      `build-${this.metrics.timestamp.replace(/[:.]/g, '-')}.json`
    );

    writeFileSync(filename, JSON.stringify(this.metrics, null, 2));
  }

  private reportMetrics(): void {
    const durationSeconds = (this.metrics.duration / 1000).toFixed(2);
    
    console.log('\n📊 Build Metrics:');
    console.log(`⏱️  Duration: ${durationSeconds}s`);
    console.log(`✅ Success: ${this.metrics.success}`);

    if (this.metrics.duration > BuildMonitor.THRESHOLD_MS) {
      console.warn(`⚠️  Build took longer than ${BuildMonitor.THRESHOLD_MS / 1000}s threshold`);
    }

    if (this.metrics.errors?.length) {
      console.error(`❌ Errors: ${this.metrics.errors.length}`);
    }

    if (this.metrics.warnings?.length) {
      console.warn(`⚠️  Warnings: ${this.metrics.warnings.length}`);
    }
  }
}

// Export singleton instance
export const buildMonitor = new BuildMonitor();
