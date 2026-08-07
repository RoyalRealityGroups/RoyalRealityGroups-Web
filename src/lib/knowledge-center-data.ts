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

GVMC approval certifies that a building plan or layout complies with local building bye-laws, zoning regulations, and master plan guidelines.

|Documents Required|Purpose|
|Ownership documents (Sale Deed / Gift Deed / Partition Deed)|Proof of ownership|
|Encumbrance Certificate (EC) for 15 years|Confirms no liabilities|
|Survey sketches and FMB|Land measurement verification|
|Structural Engineer's Certificate|Structural safety|
|Architect-approved building plan|Design compliance|
|NOC from Fire Department (multi-storey)|Fire safety compliance|
|Land Use Certificate|Zoning compliance|

|Step|Process|
|1|Submit application with required documents to GVMC Town Planning Section|
|2|Site inspection by GVMC officials|
|3|Scrutiny of building plan against bye-laws|
|4|Approval / Rejection with conditions|
|5|Issue of Building Permission Order|

**Timeline:** 30-45 working days

|Why It Matters|Details|
|Legal compliance|Ensures construction follows local laws|
|Utility connections|Required for water, electricity connections|
|Home loan approval|Mandatory for bank loan processing|
|Penalty protection|Protects against unauthorized construction penalties|`,
  },
  {
    id: "vmrda-approval",
    title: "VMRDA Approval",
    category: "Approvals",
    summary: "Guide to Visakhapatnam Metropolitan Region Development Authority layout and building approvals.",
    content: `VMRDA (Visakhapatnam Metropolitan Region Development Authority) governs land use planning and development in the metropolitan region outside GVMC limits.

VMRDA approval is required for layouts, buildings, and developments in areas under VMRDA jurisdiction (outside GVMC but within the metropolitan region).

|Key Functions|Description|
|Layout approval|For residential/commercial plots|
|Building permission|For constructions in VMRDA area|
|Land use zoning and conversion|Change of land classification|
|Infrastructure development planning|Roads, utilities, public spaces|

|Documents Required|Purpose|
|Revenue records (Pattadar Passbook, Adangal)|Ownership proof|
|Survey & Settlement records|Land identification|
|Encumbrance Certificate|No liabilities confirmation|
|Legal opinion from advocate|Title verification|
|Layout plan by Licensed Surveyor|Technical plan|
|NOCs from relevant departments|Clearances|

|Step|Process|
|1|Pre-application consultation with VMRDA|
|2|Submit application with layout/building plan|
|3|Technical scrutiny and site inspection|
|4|Approval by competent authority|
|5|Issue of Layout Permission / Building Permission|

**Timeline:** 45-60 working days

|Important Notes|Details|
|Jurisdiction check|Always verify if land falls under VMRDA or GVMC|
|Land conversion|Agricultural to non-agricultural conversion required before layout approval|
|Resale value|VMRDA-approved layouts have better resale value and bank loan eligibility|`,
  },
  {
    id: "lrs",
    title: "LRS (Layout Regularization Scheme)",
    category: "Approvals",
    summary: "Everything about Layout Regularization Scheme for unauthorized layouts in Andhra Pradesh.",
    content: `LRS (Layout Regularization Scheme) was introduced by the Government of Andhra Pradesh to regularize unauthorized layouts.

LRS allows owners of plots in unauthorized layouts to get their plots regularized by paying a prescribed fee. This gives legal status to plots that were developed without proper layout permission.

|Eligibility Criteria|Details|
|Cut-off date|Plots in layouts developed before the cut-off date (as per latest GO)|
|Land type|Should not be government land or assigned land|
|Master Plan|Layout should not violate Master Plan zoning in certain categories|
|Road width|Minimum road width requirements must be met|

|Benefits of LRS|Details|
|Legal recognition|Official legal status for the plot|
|Building permission|Ability to obtain building permission|
|Bank loan eligibility|Property accepted as collateral|
|Better resale value|Higher market value with LRS certificate|
|Civic amenities|Access to water, drainage, electricity|

|Documents Required|Purpose|
|Sale Deed / Agreement of Sale|Ownership proof|
|Link documents|Establishing ownership chain|
|Survey sketch / FMB|Land identification|
|Tax receipts|Tax compliance proof|
|Aadhaar card and address proof|Identity verification|
|Passport-size photographs|Application requirement|

**Fee Structure:** Fees vary based on location, plot size, and road width. Check the latest GO for current rates.

|Step|Process|
|1|Apply online through the AP LRS portal|
|2|Upload required documents|
|3|Pay scrutiny fee|
|4|Site inspection by officials|
|5|Verification of documents|
|6|Payment of regularization fee|
|7|Issue of LRS certificate|`,
  },
  {
    id: "encumbrance-certificate",
    title: "EC (Encumbrance Certificate)",
    category: "Documentation",
    summary: "Understanding Encumbrance Certificates — why they matter and how to obtain them.",
    content: `An Encumbrance Certificate (EC) is a crucial document that proves the property is free from any monetary or legal liabilities.

An EC is issued by the Sub-Registrar's Office and shows all registered transactions related to a property for a specific period. It confirms whether the property has any encumbrances (charges, mortgages, liens) or is free from them.

|Type|Description|
|Form 15|Issued when there are registered transactions during the period|
|Form 16 (Nil EC)|Issued when there are no transactions during the period|

|Why You Need EC|Details|
|Property purchase verification|Essential for verifying property history|
|Bank home loans|Required document for loan processing|
|Mutation and registration|Needed for ownership transfer|
|Clear title confirmation|Confirms ownership chain|
|Building permissions|Required for LRS and construction approvals|

|Step|How to Obtain|
|1|Visit the Sub-Registrar's Office or apply online at registration.ap.gov.in|
|2|Fill Form 22 with property details|
|3|Pay the prescribed fee|
|4|EC is issued within 3-5 working days|

|Important Tips|Details|
|Duration|Always obtain EC for at least 13-15 years|
|Verify entries|Check all entries carefully for mortgages or litigation|
|Survey numbers|Verify the survey numbers match your property|
|Timing|Get a fresh EC just before registration of sale|`,
  },
  {
    id: "mutation",
    title: "Mutation",
    category: "Documentation",
    summary: "Guide to property mutation — transferring revenue records to the new owner's name.",
    content: `Mutation is the process of transferring the revenue records of a property from the previous owner to the new owner in government records.

After purchasing a property, mutation updates the revenue records (Pattadar Passbook) with the new owner's name. This ensures government records reflect the current ownership.

|Why Mutation is Important|Details|
|Revenue records|Updates government revenue records|
|Property tax|Required for paying property tax in your name|
|Building permissions|Essential for obtaining construction approvals|
|Future sale|Needed for any future sale of the property|
|Bank loan|Required for bank loan processing|

|Documents Required|Purpose|
|Registered Sale Deed (original + copies)|Proof of transaction|
|Previous owner's Pattadar Passbook|Previous ownership record|
|Encumbrance Certificate|No liabilities proof|
|Property Tax receipts|Tax compliance|
|Aadhaar card of new owner|Identity verification|
|Application form|Official application|

|Step|Process|
|1|Apply at the Mandal Revenue Office (MRO) or Tahsildar office|
|2|Submit application with required documents|
|3|Notice issued to previous owner and neighbors|
|4|Site inspection (if required)|
|5|Hearing and verification|
|6|Mutation order issued|
|7|New Pattadar Passbook issued|

**Timeline:** 30-90 days depending on the office

**Online Process:** In AP, mutation can also be applied through Meeseva centers or the AP Revenue Department portal.`,
  },
  {
    id: "adangal",
    title: "Adangal",
    category: "Documentation",
    summary: "Understanding Adangal — the village-level land record that every buyer should check.",
    content: `Adangal (also called Pahani in some states) is the most fundamental revenue record maintained at the village level.

Adangal is a village-level account that contains details of all lands in a village, including ownership, extent, classification, water source, crop details, and tenancy information.

|Information in Adangal|Details|
|Survey number and sub-division|Land identification|
|Name of the Pattadar (owner)|Current owner|
|Extent of land|Area measurement|
|Classification (wet/dry/garden)|Land type|
|Nature of possession|How land is held|
|Water source details|Irrigation information|
|Crop grown|Agricultural activity|
|Assessment (land revenue payable)|Tax amount|

|Why Check Adangal Before Purchase|Details|
|Owner confirmation|Confirms current owner's name|
|Land classification|Shows agricultural/non-agricultural status|
|Government claims|Reveals any government claims on the land|
|Assigned land check|Shows if land is assigned/government land|
|Tenancy/disputes|Indicates any tenancy or disputes|

|Step|How to Obtain|
|1|Visit the Village Revenue Officer (VRO) office|
|2|Apply online through MeeSeva or AP Land Records portal (meebhoomi.ap.gov.in)|
|3|Provide survey number and village details|
|4|Adangal extract is issued|

|Important Notes|Details|
|Cross-verify|Always cross-verify Adangal with 1-B (Record of Rights)|
|Land classification|Check if the land classification allows construction|
|Inam/Assigned|Ensure no 'Inam' or 'Assigned' notations exist|
|Current year|Verify the Adangal is for the current fasli year|`,
  },
  {
    id: "registration-process",
    title: "Registration Process",
    category: "Process Guides",
    summary: "Step-by-step guide to property registration in Andhra Pradesh.",
    content: `Property registration is the legal process of recording a property transaction in government records, making it legally valid and enforceable.

|Step|Process|Details|
|1|Document Preparation|Engage advocate, prepare Sale Deed, get stamp paper, collect supporting documents|
|2|Stamp Duty Payment|Calculate based on property/market value (whichever is higher), pay online through AP Registration portal|
|3|Slot Booking|Book appointment at Sub-Registrar's Office online, choose date and time|
|4|Visit Sub-Registrar's Office|Both buyer and seller present, carry originals and ID, two witnesses, biometric verification|
|5|Registration|Document verified and registered, registration number assigned, certified copy in 3-5 days|

|Documents Required|Purpose|
|Sale Deed on stamp paper|Transaction document|
|Original previous title deeds (link documents)|Ownership chain|
|EC for 15 years|No liabilities proof|
|Pattadar Passbook|Revenue record|
|Aadhaar cards (buyer, seller, witnesses)|Identity verification|
|Passport-size photos|Application requirement|
|PAN cards (if value exceeds ₹50 lakhs)|Tax compliance|
|TDS certificate (if applicable)|Tax deduction proof|

|Cost Component|Rate|
|Stamp Duty|5% of market/sale value|
|Transfer Duty|0.5%|
|Registration Fee|0.5%|
|User charges|Nominal|`,
  },
  {
    id: "home-loan-process",
    title: "Home Loan Process",
    category: "Process Guides",
    summary: "Complete guide to obtaining a home loan — from application to disbursement.",
    content: `A home loan helps you purchase your dream property by financing up to 80-90% of the property value. Here's a complete guide to the process.

|Eligibility Factor|Requirement|
|Age|21-65 years|
|Income (Salaried)|Minimum ₹25,000/month|
|Income (Self-employed)|Minimum ₹3 lakhs/year|
|CIBIL Score|700+ preferred|
|Employment stability|Minimum 2-3 years|
|Existing EMI|Should be manageable within debt-to-income ratio|

|Loan Type|Purpose|
|Home Purchase Loan|Buy a ready/under-construction property|
|Plot Purchase Loan|Buy a plot of land|
|Home Construction Loan|Build a house on your plot|
|Home Extension/Improvement Loan|Renovate or extend existing home|
|Balance Transfer|Transfer loan to another bank for better rate|

|Step|Process|Details|
|1|Check Eligibility & Compare|Use EMI calculators, compare rates, check processing fees|
|2|Application|Fill form, submit documents, pay processing fee (0.25-1%)|
|3|Document Submission|Salaried: Salary slips, Form 16, bank statements. Self-employed: ITR, P&L, balance sheet|
|4|Verification|Document verification, CIBIL check, personal discussion, property legal & technical check|
|5|Sanction|Loan amount sanctioned, sanction letter issued, valid for 6 months|
|6|Disbursement|After registration, linked to construction stage, NEFT to seller|

|Bank|Interest Rate (Approx)|
|SBI|8.50% onwards|
|HDFC|8.70% onwards|
|ICICI|8.75% onwards|
|Axis|8.75% onwards|

|Tips for Home Loan|Details|
|CIBIL score|Maintain good score by paying EMIs on time|
|Debt-to-income|Keep ratio below 50%|
|Tenure|Opt for shorter tenure to save interest|
|Joint loan|Consider joint loan for higher eligibility|`,
  },
  {
    id: "property-verification",
    title: "Property Verification Process",
    category: "Process Guides",
    summary: "How to verify a property before purchase — legal, technical, and physical due diligence.",
    content: `Property verification is crucial before making any purchase. A thorough verification protects you from fraud, disputes, and legal issues.

|Legal Verification|What to Check|
|Title Check|Verify chain of ownership for 30+ years, ensure no missing links, check for court cases|
|Encumbrance Check|Obtain EC for 13-15 years, verify no mortgages, liens, or charges|
|Document Verification|Original sale deeds, partition deeds, will/succession certificates, POA validity|
|Revenue Record Check|Verify Adangal/Pahani, check 1-B extract, confirm survey numbers match|

|Technical Verification|What to Check|
|Survey & Boundaries|Physical survey by licensed surveyor, match with FMB, check for encroachments|
|Approvals & Permissions|Verify VMRDA/GVMC/LPA approval, check building permission validity, confirm no deviations|
|Zoning & Land Use|Verify master plan zoning, ensure compatible land use, check road widening proposals|

|Physical Verification|What to Check|
|Site Visit|Visit at different times, talk to neighbors, check access roads, verify amenities|
|Infrastructure Check|Water supply, electricity, drainage/sewerage, road condition|

|Red Flags to Watch|Why It's Risky|
|Seller in a hurry / unusual discount|Possible hidden issues with property|
|Unclear or missing original documents|Title may not be clear|
|Multiple owners with disagreements|Risk of legal disputes|
|Litigation pending in courts|Property may be under dispute|
|Government acquisition notices|Property may be acquired|
|Seller not the registered owner|Potential fraud|

|Professional Help|Purpose|
|Experienced property lawyer|Legal opinion and title verification|
|Licensed surveyor|Boundary verification and measurement|
|Bank's technical verifier|Property valuation|`,
  },
  {
    id: "apartment-buying-guide",
    title: "Apartment Buying Guide",
    category: "Buying Guides",
    summary: "Complete guide to purchasing an apartment — what to check, costs involved, and tips.",
    content: `Buying an apartment is a significant investment. This guide helps you navigate the process and make an informed decision.

|Before You Start|Details|
|Define budget|Include registration, interiors, parking costs|
|Shortlist locations|Based on work, schools, connectivity|
|Decide size|BHK configuration based on family needs|
|Check loan eligibility|Know your borrowing capacity|

|Builder Verification|What to Check|
|Track record|Completed projects and quality|
|RERA registration|Mandatory registration number|
|Financial stability|Company financial health|
|Customer reviews|Feedback from existing buyers|
|Pending litigation|Any legal issues against builder|

|Legal Checks|What to Verify|
|RERA registration|Mandatory for all projects|
|GVMC/VMRDA approved plan|Building plan approval|
|Commencement Certificate|Permission to start construction|
|Land title documents|Clear ownership of land|
|Builder-landowner agreement|Development agreement terms|
|Encumbrance Certificate|No liabilities on land|

|Technical Checks|What to Verify|
|Construction quality|Inspect completed projects|
|Structural design certificate|Engineering approval|
|Soil test report|Foundation safety|
|Earthquake resistance|Compliance with building codes|
|Fire safety measures|Fire NOC and equipment|
|Rainwater harvesting|Mandatory provision|

|Amenities|Details|
|Parking|Covered/open allocation|
|Lift|Specifications and count|
|Power backup|Generator capacity|
|Water supply|Source and storage|
|Security|CCTV, guards, access control|
|Maintenance charges|Monthly/yearly amount|

|Cost Component|Details|
|Base price|Per sq.ft rate|
|Floor rise charges|Additional per floor|
|Parking charges|₹3-8 lakhs|
|Club membership|One-time fee|
|Maintenance deposit|Advance maintenance|
|Registration charges|6% of property value|
|GST|5% under-construction, 0% ready|
|Interior costs|₹500-2000/sq.ft|

|Important Tips|Details|
|Site visits|Visit multiple times at different hours|
|UDS|Check Undivided Share of Land percentage|
|Agreement|Read sale agreement carefully|
|Area|Verify carpet area vs super built-up area|
|OC|Check occupancy certificate for ready projects|
|Utilities|Verify water and electricity availability|
|Residents feedback|Talk to existing residents|`,
  },
  {
    id: "plot-buying-guide",
    title: "Plot Buying Guide",
    category: "Buying Guides",
    summary: "Essential guide to purchasing a plot — verification, documentation, and investment tips.",
    content: `Investing in a plot offers flexibility to build your dream home on your terms. Here's what you need to know.

|Advantages of Plot Purchase|Details|
|Higher appreciation|Typically higher than apartments|
|Design freedom|Build your own dream home|
|No maintenance charges|Until construction begins|
|Lower initial investment|Compared to built properties|
|Collateral use|Can be used for loans|

|Types of Plots|Description|
|Revenue layout plots|Individual plots in revenue records|
|Approved layout plots|VMRDA/GVMC/LPA approved|
|Farmland/Agricultural land|Requires conversion before construction|

|Legal Verification|What to Check|
|Clear title|30-year ownership chain|
|Layout approval|From competent authority|
|LRS completion|If unapproved layout|
|No encumbrances|Free from liabilities and litigation|
|No acquisition|Not marked for government acquisition|

|Physical Verification|What to Check|
|Measurements|Actual measurements match documents|
|Access road|Width and condition of approach road|
|Boundary stones|Markers in place|
|Encroachments|No unauthorized occupation|
|Terrain & soil|Suitable for construction|

|Location Factors|Why It Matters|
|Proximity to main roads/highways|Easy access and connectivity|
|Upcoming developments|IT parks, airports drive appreciation|
|Water & electricity|Basic utility availability|
|Schools, hospitals, markets|Daily convenience|
|Safety & neighborhood|Quality of living|

|Documents for Purchase|Purpose|
|Sale Deed (registered)|Legal ownership transfer|
|Layout copy with plot marked|Plot identification|
|EC for 15 years|No liabilities proof|
|Revenue records (Adangal, 1-B)|Government land records|
|Survey sketch / FMB|Land measurement|
|Tax payment receipts|Tax compliance|
|LRS certificate (if applicable)|Regularization proof|

|Investment Tips|Details|
|Approved layouts|Buy only in approved layouts|
|Facing|Prefer east or north-facing plots|
|Corner plots|Have premium resale value|
|Master plan|Check for future road widening|
|Growth corridors|IT, pharma, port-adjacent areas|
|Resale history|Verify market rates|
|Legal opinion|Never skip legal verification|`,
  },
  {
    id: "investment-guides",
    title: "Investment Guides",
    category: "Buying Guides",
    summary: "Smart real estate investment strategies for Visakhapatnam market.",
    content: `Real estate in Visakhapatnam offers excellent investment potential. Here's how to make smart decisions.

|Why Invest in Vizag Real Estate|Details|
|Rapidly growing IT hub|Rushikonda IT SEZ driving demand|
|Proposed Executive Capital|Andhra Pradesh capital city status|
|Excellent connectivity|Airport, Port, Railway networks|
|Tourism & hospitality growth|Increasing tourist footfall|
|Pleasant climate|Attracting retirees nationwide|
|Affordable compared to metros|Lower entry cost, higher returns|

|Strategy|Description|Expected Returns|
|Buy & Hold (Long-term)|Purchase plots in growth corridors, wait 5-10 years|15-25% CAGR|
|Buy & Rent (Income)|Purchase apartments in IT corridors, rent to IT professionals|2-4% rental yield + appreciation|
|Pre-launch Investment|Invest during pre-launch of reputed builders|15-30% below market at launch|
|Land Banking|Buy revenue land in future growth areas, convert after appreciation|Requires 10+ year horizon|

|Growth Corridors in Visakhapatnam|Key Driver|
|Madhurawada - Anandapuram|IT Hub proximity|
|Gajuwaka - Pedagantyada|Industrial growth|
|Kommadi - Rushikonda|IT & Tourism|
|Bhogapuram|New Airport corridor|
|Anakapalli|Industrial & port connectivity|

|Financial Planning Tips|Details|
|Investment limit|Don't invest more than 40% of net worth in single property|
|EMI reserve|Maintain 6-month EMI reserve|
|Tax benefits|Consider Section 24, 80C benefits|
|Exit strategy|Plan exit strategy before buying|
|Holding costs|Factor in taxes & maintenance|

|Common Mistakes to Avoid|Why It Matters|
|Buying without legal verification|Risk of disputes and financial loss|
|Ignoring location fundamentals|Poor appreciation potential|
|Over-leveraging (excessive loans)|Financial stress during downturns|
|Emotional buying without research|Overpaying for property|
|Ignoring resale potential|Difficulty in exit|
|Not factoring total cost of ownership|Hidden costs reduce returns|`,
  },
];

export function getArticleById(id: string): KnowledgeArticle | undefined {
  return knowledgeArticles.find((a) => a.id === id);
}

export function getArticlesByCategory(category: string): KnowledgeArticle[] {
  return knowledgeArticles.filter((a) => a.category === category);
}
