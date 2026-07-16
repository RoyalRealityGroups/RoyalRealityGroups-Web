export interface KnowledgeArticle {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
}

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    id: "gvmc-approval",
    title: "GVMC Approval",
    category: "Approvals",
    summary: "Understanding Greater Visakhapatnam Municipal Corporation approvals for property development.",
    content: `GVMC (Greater Visakhapatnam Municipal Corporation) approval is mandatory for any construction or layout development within GVMC limits.

**What is GVMC Approval?**
GVMC approval certifies that a building plan or layout complies with local building bye-laws, zoning regulations, and master plan guidelines.

**Documents Required:**
- Ownership documents (Sale Deed / Gift Deed / Partition Deed)
- Encumbrance Certificate (EC) for 15 years
- Survey sketches and FMB
- Structural Engineer's Certificate
- Architect-approved building plan
- NOC from Fire Department (for multi-storey buildings)
- Land Use Certificate

**Process:**
1. Submit application with required documents to GVMC Town Planning Section
2. Site inspection by GVMC officials
3. Scrutiny of building plan against bye-laws
4. Approval / Rejection with conditions
5. Issue of Building Permission Order

**Timeline:** 30-45 working days

**Why It Matters:**
- Ensures legal compliance
- Required for obtaining water, electricity connections
- Mandatory for home loan approval from banks
- Protects against unauthorized construction penalties`,
  },
  {
    id: "vmrda-approval",
    title: "VMRDA Approval",
    category: "Approvals",
    summary: "Guide to Visakhapatnam Metropolitan Region Development Authority layout and building approvals.",
    content: `VMRDA (Visakhapatnam Metropolitan Region Development Authority) governs land use planning and development in the metropolitan region outside GVMC limits.

**What is VMRDA Approval?**
VMRDA approval is required for layouts, buildings, and developments in areas under VMRDA jurisdiction (outside GVMC but within the metropolitan region).

**Key Functions:**
- Layout approval for residential/commercial plots
- Building permission for constructions
- Land use zoning and conversion
- Infrastructure development planning

**Documents Required:**
- Revenue records (Pattadar Passbook, Adangal)
- Survey & Settlement records
- Encumbrance Certificate
- Legal opinion from advocate
- Layout plan prepared by Licensed Surveyor
- NOCs from relevant departments

**Process:**
1. Pre-application consultation with VMRDA
2. Submit application with layout/building plan
3. Technical scrutiny and site inspection
4. Approval by competent authority
5. Issue of Layout Permission / Building Permission

**Timeline:** 45-60 working days

**Important Notes:**
- Always verify if the land falls under VMRDA or GVMC jurisdiction
- Conversion of agricultural land to non-agricultural use is required before layout approval
- VMRDA-approved layouts have better resale value and bank loan eligibility`,
  },
  {
    id: "lrs",
    title: "LRS (Layout Regularization Scheme)",
    category: "Approvals",
    summary: "Everything about Layout Regularization Scheme for unauthorized layouts in Andhra Pradesh.",
    content: `LRS (Layout Regularization Scheme) was introduced by the Government of Andhra Pradesh to regularize unauthorized layouts.

**What is LRS?**
LRS allows owners of plots in unauthorized layouts to get their plots regularized by paying a prescribed fee. This gives legal status to plots that were developed without proper layout permission.

**Eligibility:**
- Plots in layouts developed before the cut-off date (as per latest GO)
- Land should not be government land or assigned land
- Layout should not violate Master Plan zoning in certain categories
- Minimum road width requirements must be met

**Benefits of LRS:**
- Legal recognition of the plot
- Ability to obtain building permission
- Bank loan eligibility
- Better resale value
- Access to civic amenities (water, drainage, electricity)

**Documents Required:**
- Sale Deed / Agreement of Sale
- Link documents establishing ownership chain
- Survey sketch / FMB
- Tax receipts
- Aadhaar card and address proof
- Passport-size photographs

**Fee Structure:**
Fees vary based on location, plot size, and road width. Check the latest GO for current rates.

**Process:**
1. Apply online through the AP LRS portal
2. Upload required documents
3. Pay scrutiny fee
4. Site inspection by officials
5. Verification of documents
6. Payment of regularization fee
7. Issue of LRS certificate`,
  },
  {
    id: "encumbrance-certificate",
    title: "EC (Encumbrance Certificate)",
    category: "Documentation",
    summary: "Understanding Encumbrance Certificates — why they matter and how to obtain them.",
    content: `An Encumbrance Certificate (EC) is a crucial document that proves the property is free from any monetary or legal liabilities.

**What is an EC?**
An EC is issued by the Sub-Registrar's Office and shows all registered transactions related to a property for a specific period. It confirms whether the property has any encumbrances (charges, mortgages, liens) or is free from them.

**Types:**
- **Form 15:** Issued when there are registered transactions during the period
- **Form 16 (Nil EC):** Issued when there are no transactions during the period

**Why You Need EC:**
- Essential for property purchase verification
- Required for bank home loans
- Needed for mutation and registration
- Confirms clear title and ownership chain
- Required for LRS and building permissions

**How to Obtain:**
1. Visit the Sub-Registrar's Office or apply online at registration.ap.gov.in
2. Fill Form 22 with property details
3. Pay the prescribed fee
4. EC is issued within 3-5 working days

**Important Tips:**
- Always obtain EC for at least 13-15 years
- Check all entries carefully for mortgages or litigation
- Verify the survey numbers match your property
- Get a fresh EC just before registration of sale`,
  },
  {
    id: "mutation",
    title: "Mutation",
    category: "Documentation",
    summary: "Guide to property mutation — transferring revenue records to the new owner's name.",
    content: `Mutation is the process of transferring the revenue records of a property from the previous owner to the new owner in government records.

**What is Mutation?**
After purchasing a property, mutation updates the revenue records (Pattadar Passbook) with the new owner's name. This ensures government records reflect the current ownership.

**Why Mutation is Important:**
- Updates government revenue records
- Required for paying property tax in your name
- Essential for obtaining building permissions
- Needed for any future sale of the property
- Required for bank loan processing

**Documents Required:**
- Registered Sale Deed (original + copies)
- Previous owner's Pattadar Passbook
- Encumbrance Certificate
- Property Tax receipts
- Aadhaar card of new owner
- Application form

**Process:**
1. Apply at the Mandal Revenue Office (MRO) or Tahsildar office
2. Submit application with required documents
3. Notice issued to previous owner and neighbors
4. Site inspection (if required)
5. Hearing and verification
6. Mutation order issued
7. New Pattadar Passbook issued

**Timeline:** 30-90 days depending on the office

**Online Process:**
In AP, mutation can also be applied through Meeseva centers or the AP Revenue Department portal.`,
  },
  {
    id: "adangal",
    title: "Adangal",
    category: "Documentation",
    summary: "Understanding Adangal — the village-level land record that every buyer should check.",
    content: `Adangal (also called Pahani in some states) is the most fundamental revenue record maintained at the village level.

**What is Adangal?**
Adangal is a village-level account that contains details of all lands in a village, including ownership, extent, classification, water source, crop details, and tenancy information.

**Information in Adangal:**
- Survey number and sub-division
- Name of the Pattadar (owner)
- Extent of land
- Classification (wet/dry/garden)
- Nature of possession
- Water source details
- Crop grown
- Assessment (land revenue payable)

**Why Check Adangal Before Purchase:**
- Confirms current owner's name
- Shows land classification (agricultural/non-agricultural)
- Reveals any government claims on the land
- Shows if land is assigned/government land
- Indicates any tenancy/disputes

**How to Obtain:**
1. Visit the Village Revenue Officer (VRO) office
2. Apply online through MeeSeva or AP Land Records portal (meebhoomi.ap.gov.in)
3. Provide survey number and village details
4. Adangal extract is issued

**Important Notes:**
- Always cross-verify Adangal with 1-B (Record of Rights)
- Check if the land classification allows construction
- Ensure no 'Inam' or 'Assigned' notations exist
- Verify the Adangal is for the current fasli year`,
  },
  {
    id: "registration-process",
    title: "Registration Process",
    category: "Process Guides",
    summary: "Step-by-step guide to property registration in Andhra Pradesh.",
    content: `Property registration is the legal process of recording a property transaction in government records, making it legally valid and enforceable.

**Steps for Property Registration:**

**Step 1: Document Preparation**
- Engage a document writer or advocate
- Prepare the Sale Deed with all terms
- Get stamp paper of appropriate value
- Collect all supporting documents

**Step 2: Stamp Duty Payment**
- Calculate stamp duty based on property value or market value (whichever is higher)
- Current rates in AP: 5% stamp duty + 0.5% transfer duty (residential), plus registration fee of 0.5%
- Pay online through AP Registration portal

**Step 3: Slot Booking**
- Book an appointment at the Sub-Registrar's Office online
- Choose date and time slot

**Step 4: Visit Sub-Registrar's Office**
- Both buyer and seller must be present
- Carry original documents and ID proofs
- Two witnesses required
- Biometric verification (fingerprints and photo)

**Step 5: Registration**
- Document verified and registered
- Registration number and book number assigned
- Certified copy issued within 3-5 days

**Documents Required:**
- Sale Deed on stamp paper
- Original previous title deeds (link documents)
- EC for 15 years
- Pattadar Passbook
- Aadhaar cards (buyer, seller, witnesses)
- Passport-size photos
- PAN cards (if value exceeds ₹50 lakhs)
- TDS certificate (if applicable)

**Costs:**
- Stamp Duty: 5% of market/sale value
- Transfer Duty: 0.5%
- Registration Fee: 0.5%
- User charges: Nominal`,
  },
  {
    id: "home-loan-process",
    title: "Home Loan Process",
    category: "Process Guides",
    summary: "Complete guide to obtaining a home loan — from application to disbursement.",
    content: `A home loan helps you purchase your dream property by financing up to 80-90% of the property value. Here's a complete guide to the process.

**Eligibility Factors:**
- Age: 21-65 years
- Income: Minimum ₹25,000/month (salaried) or ₹3 lakhs/year (self-employed)
- CIBIL Score: 700+ preferred
- Employment stability: Minimum 2-3 years
- Existing EMI obligations

**Types of Home Loans:**
- Home Purchase Loan
- Plot Purchase Loan
- Home Construction Loan
- Home Extension/Improvement Loan
- Balance Transfer

**Step-by-Step Process:**

**1. Check Eligibility & Compare**
- Use online EMI calculators
- Compare interest rates across banks
- Check processing fees and hidden charges

**2. Application**
- Fill application form (online/offline)
- Submit documents
- Pay processing fee (0.25-1% of loan amount)

**3. Documents Required:**
*Salaried:* Salary slips (3 months), Form 16, Bank statements (6 months), ID & address proof
*Self-employed:* ITR (3 years), Business proof, P&L and Balance Sheet, Bank statements (12 months)
*Property:* Sale agreement, Title documents, EC, Approved plan, Builder NOC

**4. Verification**
- Document verification
- CIBIL check
- Personal discussion with banker
- Property legal & technical verification

**5. Sanction**
- Loan amount sanctioned
- Sanction letter issued with terms
- Valid for 6 months typically

**6. Disbursement**
- After registration of property
- Linked to construction stage (for under-construction)
- Cheque/NEFT to seller's account

**Current Interest Rates (Approximate):**
- SBI: 8.50% onwards
- HDFC: 8.70% onwards
- ICICI: 8.75% onwards
- Axis: 8.75% onwards

**Tips:**
- Maintain a good CIBIL score (pay EMIs on time)
- Keep debt-to-income ratio below 50%
- Opt for shorter tenure to save interest
- Consider joint loan for higher eligibility`,
  },
  {
    id: "property-verification",
    title: "Property Verification Process",
    category: "Process Guides",
    summary: "How to verify a property before purchase — legal, technical, and physical due diligence.",
    content: `Property verification is crucial before making any purchase. A thorough verification protects you from fraud, disputes, and legal issues.

**Legal Verification:**

1. **Title Check**
   - Verify the chain of ownership for 30+ years
   - Ensure no missing links in title
   - Check for any court cases or disputes

2. **Encumbrance Check**
   - Obtain EC for 13-15 years
   - Verify no mortgages, liens, or charges exist

3. **Document Verification**
   - Original sale deeds of all previous transactions
   - Partition deeds (if applicable)
   - Will/succession certificates (if inherited)
   - Power of Attorney validity

4. **Revenue Record Check**
   - Verify Adangal / Pahani
   - Check 1-B extract
   - Confirm survey numbers match

**Technical Verification:**

1. **Survey & Boundaries**
   - Physical survey by licensed surveyor
   - Match boundaries with FMB (Field Measurement Book)
   - Check for encroachments

2. **Approvals & Permissions**
   - Verify VMRDA/GVMC/LPA approval
   - Check building permission validity
   - Confirm no unauthorized deviations

3. **Zoning & Land Use**
   - Verify master plan zoning
   - Ensure land use is compatible with intended purpose
   - Check for road widening / acquisition proposals

**Physical Verification:**

1. **Site Visit**
   - Visit at different times of day
   - Talk to neighbors
   - Check access roads and connectivity
   - Verify amenities availability

2. **Infrastructure Check**
   - Water supply availability
   - Electricity connection
   - Drainage and sewerage
   - Road condition

**Red Flags to Watch:**
- Seller in a hurry / offering unusual discount
- Unclear or missing original documents
- Multiple owners with disagreements
- Litigation pending in courts
- Government acquisition notices
- Seller not the registered owner

**Professional Help:**
- Hire an experienced property lawyer for legal opinion
- Engage a licensed surveyor for boundary verification
- Use bank's technical verifier for valuation`,
  },
  {
    id: "apartment-buying-guide",
    title: "Apartment Buying Guide",
    category: "Buying Guides",
    summary: "Complete guide to purchasing an apartment — what to check, costs involved, and tips.",
    content: `Buying an apartment is a significant investment. This guide helps you navigate the process and make an informed decision.

**Before You Start:**
- Define your budget (include registration, interiors, parking costs)
- Shortlist preferred locations
- Decide on the size (BHK configuration)
- Check your home loan eligibility

**What to Check in the Apartment:**

**Builder Verification:**
- Track record and completed projects
- RERA registration number
- Financial stability
- Customer reviews and feedback
- Pending litigation

**Legal Checks:**
- RERA registration
- GVMC/VMRDA approved plan
- Commencement Certificate
- Land title documents
- Builder-landowner agreement
- Encumbrance Certificate on land

**Technical Checks:**
- Construction quality (check completed projects)
- Structural design certificate
- Soil test report
- Earthquake resistance compliance
- Fire safety measures
- Rainwater harvesting

**Amenities & Common Areas:**
- Parking allocation (covered/open)
- Lift specifications
- Power backup
- Water supply source
- Security arrangements
- Maintenance charges

**Costs Involved:**
- Base price per sq.ft
- Floor rise charges
- Parking charges (₹3-8 lakhs)
- Club membership
- Maintenance deposit
- Registration charges (6%)
- GST (5% for under-construction, 0% for ready)
- Interior costs (₹500-2000/sq.ft)

**Important Tips:**
- Visit the site multiple times
- Check UDS (Undivided Share of Land) percentage
- Read the sale agreement carefully
- Verify carpet area vs super built-up area
- Check for occupancy certificate (ready projects)
- Verify water and electricity availability
- Talk to existing residents in completed phases`,
  },
  {
    id: "plot-buying-guide",
    title: "Plot Buying Guide",
    category: "Buying Guides",
    summary: "Essential guide to purchasing a plot — verification, documentation, and investment tips.",
    content: `Investing in a plot offers flexibility to build your dream home on your terms. Here's what you need to know.

**Advantages of Plot Purchase:**
- Appreciation potential is typically higher than apartments
- Freedom to design your own home
- No maintenance charges until construction
- Lower initial investment compared to built properties
- Can be used as collateral for loans

**Types of Plots:**
- Revenue layout plots (individual plots in revenue records)
- Approved layout plots (VMRDA/GVMC/LPA approved)
- Farmland/Agricultural land (requires conversion)

**What to Verify:**

**Legal:**
- Clear title with 30-year chain
- Layout approval from competent authority
- LRS completion (if unapproved layout)
- No encumbrances or litigation
- No government acquisition

**Physical:**
- Actual measurements match documents
- Access road width and condition
- Boundary stones/markers in place
- No encroachments
- Terrain and soil condition

**Location Factors:**
- Proximity to main roads and highways
- Upcoming developments (IT parks, airports, etc.)
- Availability of water and electricity
- School, hospital, and market access
- Safety and neighborhood quality

**Documentation Required for Purchase:**
- Sale Deed (registered)
- Layout copy with plot marked
- EC for 15 years
- Revenue records (Adangal, 1-B)
- Survey sketch / FMB
- Tax payment receipts
- LRS certificate (if applicable)

**Investment Tips:**
- Buy in approved layouts only
- Prefer east or north-facing plots
- Corner plots have premium value
- Check master plan for future road widening
- Invest in growth corridors (IT, pharma, port-adjacent areas)
- Verify resale history and market rates
- Don't skip legal opinion — ever`,
  },
  {
    id: "investment-guides",
    title: "Investment Guides",
    category: "Buying Guides",
    summary: "Smart real estate investment strategies for Visakhapatnam market.",
    content: `Real estate in Visakhapatnam offers excellent investment potential. Here's how to make smart decisions.

**Why Invest in Vizag Real Estate:**
- Rapidly growing IT hub (Rushikonda IT SEZ)
- Proposed Executive Capital of Andhra Pradesh
- Excellent connectivity (Airport, Port, Railway)
- Tourism and hospitality growth
- Pleasant climate attracting retirees
- Affordable compared to metros

**Investment Strategies:**

**1. Buy & Hold (Long-term)**
- Purchase plots in growth corridors
- Wait 5-10 years for appreciation
- Expected returns: 15-25% CAGR in developing areas

**2. Buy & Rent (Income)**
- Purchase apartments in IT corridors
- Rent to IT professionals
- Typical rental yield: 2-4% per annum
- Plus capital appreciation

**3. Pre-launch Investment**
- Invest during pre-launch of reputed builders
- Typically 15-30% below market at launch
- Higher risk but higher potential returns

**4. Land Banking**
- Buy agricultural/revenue land in future growth areas
- Convert and develop after appreciation
- Requires longer horizon (10+ years)

**Growth Corridors in Visakhapatnam:**
- Madhurawada - Anandapuram (IT Hub proximity)
- Gajuwaka - Pedagantyada (Industrial growth)
- Kommadi - Rushikonda (IT & Tourism)
- Bhogapuram (New Airport corridor)
- Anakapalli (Industrial & port connectivity)

**Financial Planning:**
- Don't invest more than 40% of net worth in single property
- Maintain 6-month EMI reserve
- Consider tax benefits (Section 24, 80C)
- Plan exit strategy before buying
- Factor in holding costs (taxes, maintenance)

**Common Mistakes to Avoid:**
- Buying without legal verification
- Ignoring location fundamentals
- Over-leveraging (excessive loans)
- Emotional buying without research
- Ignoring resale potential
- Not factoring in total cost of ownership`,
  },
];

export function getArticleById(id: string): KnowledgeArticle | undefined {
  return knowledgeArticles.find((a) => a.id === id);
}

export function getArticlesByCategory(category: string): KnowledgeArticle[] {
  return knowledgeArticles.filter((a) => a.category === category);
}
