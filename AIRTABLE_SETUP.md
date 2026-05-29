# Airtable Setup for LongBio Database

## Overview
This document outlines the required Airtable setup to support the distinction between True LongBio companies and LongBio Adjacent companies.

## Current Structure
The database currently has the following views:
- **People**: `shrJc9LgRUFyizNWs`
- **Companies**: `shrt0TpkwdeAfZqwd` (to be renamed to "LongBio Companies")
- **Investors**: `shrn4KTgK1nde1n8Z`
- **Typology**: `shr52yN1NPoJeNX7q`

## Required Changes

### 1. Update Companies View
- **Current Name**: "Companies"
- **New Name**: "LongBio Companies"
- **Description**: "Explore true longevity companies and startups"
- **Filter**: Only show companies where `Classification = "True LongBio"`

### 2. Create New LongBio-Adjacent View
- **New View Name**: "LongBio-Adjacent"
- **Description**: "Companies in related fields that support longevity research"
- **Filter**: Only show companies where `Classification = "LongBio Adjacent"`

### 3. Database Schema Updates
Add a new field to the Companies table:
- **Field Name**: `Classification`
- **Field Type**: Single Select
- **Options**:
  - `True LongBio` - Companies directly focused on longevity research, anti-aging, or life extension
  - `LongBio Adjacent` - Companies in related fields that support longevity research (e.g., health tech, diagnostics, wellness, etc.)

## Implementation Steps

1. **Add Classification Field**:
   - Go to the Companies table in Airtable
   - Add a new "Single Select" field called "Classification"
   - Add the two options: "True LongBio" and "LongBio Adjacent"

2. **Create Filtered Views**:
   - Duplicate the existing Companies view
   - Rename the original to "LongBio Companies"
   - Add filter: `Classification = "True LongBio"`
   - Create new view "LongBio-Adjacent"
   - Add filter: `Classification = "LongBio Adjacent"`

3. **Update Embed URLs**:
   - Get the new view IDs from Airtable
   - Update the URLs in `src/config/database.ts`:
     - `companies.url` - should point to the "LongBio Companies" view
     - `longbioAdjacent.url` - should point to the "LongBio-Adjacent" view

## Classification Guidelines

### True LongBio Companies
Companies that are directly focused on:
- Anti-aging research
- Life extension technologies
- Longevity therapeutics
- Age-related disease prevention
- Cellular rejuvenation
- Senescence research
- Biomarkers of aging

### LongBio Adjacent Companies
Companies that support longevity research but aren't directly focused on it:
- Health monitoring and diagnostics
- Wellness and lifestyle optimization
- Medical devices for aging populations
- AI/ML for health data analysis
- Nutrition and supplement companies
- Fitness and recovery technologies
- Mental health and cognitive enhancement

## Next Steps
1. Update the Airtable database with the new field and views
2. Classify existing companies in the database
3. Update the embed URLs in the codebase
4. Test the new navigation and filtering functionality
