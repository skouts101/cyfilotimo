# Contributing to Cyprus Wildfire Support Dashboard

Thank you for your interest in contributing to this important resource! This dashboard helps people find support during the Cyprus wildfire crisis.

## 🤝 How to Contribute

### Adding New Organizations

The most valuable contribution is adding new organizations offering wildfire support.

#### 1. Research and Verification
- Find official announcements from companies/organizations
- Verify the information from reliable sources
- Collect contact details and support specifics
- Note the date of the announcement

#### 2. Data Format
Add organizations to `src/data/companies.json` using this structure:

```json
{
  "id": [next_available_number],
  "name": "Organization Name",
  "type": "Organization Type",
  "helpType": "Type of Help Provided",
  "amount": "Support Amount or Description",
  "details": "Detailed description of support offered",
  "contact": "Contact information (phone, email, address)",
  "source": "URL to official announcement",
  "date": "Date of announcement (July XX, 2025)",
  "status": "Active/Paused/Completed",
  "tags": ["relevant", "tags", "for", "filtering"]
}
```

#### 3. Organization Types
Use these standardized types:
- `Financial Services`
- `Healthcare`
- `Hospitality/Gaming`
- `Retail/Supermarket`
- `Veterinary Services`
- `Technology Company`
- `Government`
- `Non-Profit Organization`
- `Sports Club`
- `Educational Institution`
- `Collection Point`
- `Cultural/Entertainment Venue`
- And others as appropriate

#### 4. Help Types
Common help types include:
- `Financial Aid`
- `Free Animal Treatment`
- `Emergency Supplies`
- `Accommodation Support`
- `Food Service`
- `Medical Care`
- `Collection Point for Donations`
- `Bill Relief & Service Support`

#### 5. Status Values
- `Active` - Currently providing support
- `Paused` - Temporarily suspended (like Red Cross)
- `Completed` - Support period ended

#### 6. Tags
Use relevant tags for filtering:
- `Financial Aid`, `Large Donation`, `Veterinary`, `Animal Care`
- `Accommodation`, `Emergency Supplies`, `Medical Care`
- `Collection Point`, `Food Service`, `Free Treatment`
- `Community Support`, `Government Support`

### Example Addition

```json
{
  "id": 80,
  "name": "Example Company Ltd",
  "type": "Technology Company",
  "helpType": "Financial Aid & Equipment Donation",
  "amount": "€50,000 + computers",
  "details": "Providing €50,000 financial aid plus donating 100 computers to affected schools. Setting up temporary internet access points in evacuation centers.",
  "contact": "support@example.com, 25123456",
  "source": "https://example.com/wildfire-support-announcement",
  "date": "July 26, 2025",
  "status": "Active",
  "tags": [
    "Financial Aid",
    "Technology",
    "Equipment Donation",
    "Education Support",
    "Internet Access"
  ]
}
```

## 🔍 Research Sources

### Reliable Sources
- Official company websites and press releases
- Major Cyprus news outlets (Cyprus Mail, Philenews, Sigmalive)
- Government announcements
- Verified social media accounts
- Business news publications

### What to Look For
- Official announcements of support
- Specific details about help offered
- Contact information for recipients
- Duration of support
- Eligibility criteria

## 📝 Submission Process

### Option 1: Direct Edit (Recommended)
1. Fork the repository
2. Edit `src/data/companies.json`
3. Add your new organizations
4. Test locally (`npm run dev`)
5. Submit a pull request with clear description

### Option 2: Issue Report
If you're not comfortable editing JSON:
1. Create a GitHub issue
2. Include all organization details
3. Provide source links
4. Someone else will add it to the database

## ✅ Quality Guidelines

### Required Information
- ✅ Organization name
- ✅ Type of support offered
- ✅ Contact information
- ✅ Source/verification link
- ✅ Current status

### Optional but Helpful
- Specific amounts or quantities
- Duration of support
- Eligibility requirements
- Geographic limitations

### Verification Standards
- Must have official source (website, news article, press release)
- Information should be current and accurate
- Contact details should be verified when possible
- Avoid duplicate entries

## 🚫 What Not to Include

- Unverified social media posts
- Rumors or unconfirmed information
- Personal offers without organizational backing
- Outdated or expired support offers
- Duplicate organizations (check existing entries first)

## 🔄 Updating Existing Entries

If you find updates to existing organizations:
- Change status from "Active" to "Paused" or "Completed"
- Update contact information
- Add new support details
- Update amounts or scope of help

## 🐛 Bug Reports

Report issues with:
- Broken links
- Incorrect information
- Display problems
- Search/filter issues

## 💡 Feature Suggestions

Suggest improvements for:
- New filter categories
- Better search functionality
- Additional data fields
- UI/UX enhancements

## 📱 Testing

Before submitting:
1. Test locally with `npm run dev`
2. Verify new organizations appear correctly
3. Check that filters work with new tags
4. Ensure mobile responsiveness
5. Validate JSON syntax

## 🌍 Language Considerations

- Primary language is English
- Include Greek organization names when relevant
- Translate key details to English
- Preserve original contact information

## 📊 Data Integrity

### JSON Validation
- Use proper JSON syntax
- No trailing commas
- Consistent field names
- Proper string escaping

### ID Management
- Use next available ID number
- Don't reuse IDs
- Keep sequential numbering

### Tag Consistency
- Use existing tags when possible
- Create new tags sparingly
- Keep tags descriptive but concise

## 🏆 Recognition

Contributors will be acknowledged in:
- GitHub commit history
- Future documentation updates
- Community recognition

## 📞 Questions?

- Create a GitHub issue for questions
- Check existing issues for similar questions
- Review this guide thoroughly first

## 🎯 Impact

Your contributions help:
- Wildfire victims find support quickly
- Organizations reach those in need
- Community coordination and response
- Transparent tracking of aid efforts

---

**Every contribution matters in helping Cyprus recover from this crisis!**

Thank you for helping make this resource comprehensive and accurate.

