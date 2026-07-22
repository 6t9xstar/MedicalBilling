export interface County {
  name: string;
  description: string;
}

export interface USState {
  slug: string;
  name: string;
  abbr: string;
  counties: County[];
}

export const usStates: USState[] = [
  {
    slug: "alabama",
    name: "Alabama",
    abbr: "AL",
    counties: [
      {
        name: "Jefferson County",
        description: "Home to Birmingham, Alabama's largest city, Jefferson County is a healthcare and commercial hub with major hospital systems including UAB Hospital. The county's diverse payer landscape includes a mix of Blue Cross Blue Shield, Medicare, and Medicaid populations.",
      },
      {
        name: "Madison County",
        description: "Centered around Huntsville, one of Alabama's fastest-growing metros, Madison County blends aerospace-industry employment with a growing healthcare sector anchored by Huntsville Hospital Health System.",
      },
      {
        name: "Mobile County",
        description: "Mobile County, anchored by the port city of Mobile, serves a culturally diverse population with significant Medicaid enrollment and a range of community health centers serving uninsured and underinsured residents.",
      },
      {
        name: "Montgomery County",
        description: "As Alabama's capital county, Montgomery houses the state's Medicaid agency and several large specialty practices, creating unique billing coordination demands for providers navigating state-funded programs.",
      },
      {
        name: "Tuscaloosa County",
        description: "Home to the University of Alabama Medical Center, Tuscaloosa County blends academic medicine with community hospitals, requiring billing workflows that handle complex teaching-hospital coding and research-related billing.",
      },
      {
        name: "Baldwin County",
        description: "Alabama's fastest-growing coastal county, Baldwin County faces seasonal population surges and an expanding retiree base that drives demand for cardiology, orthopedics, and senior-focused specialty services.",
      },
      {
        name: "Shelby County",
        description: "One of Alabama's wealthiest counties, Shelby County's affluent suburban population supports specialty practices in dermatology, orthopedics, and cosmetic procedures with generally favorable commercial payer profiles.",
      },
      {
        name: "Lee County",
        description: "Auburn and Opelika anchor Lee County, where rapid population growth has outpaced healthcare infrastructure, creating both billing opportunities and challenges around payer credentialing and timely reimbursement.",
      },
      {
        name: "Morgan County",
        description: "Decatur serves as the healthcare anchor for Morgan County, where a mix of manufacturing-industry employees and rural patients creates distinct payer mix and medical necessity documentation challenges.",
      },
      {
        name: "Houston County",
        description: "Dothan is the medical hub of Houston County, serving a tri-state region with significant Medicare enrollment and rural healthcare needs that require careful attention to telehealth and chronic disease management billing.",
      },
    ],
  },
  {
    slug: "alaska",
    name: "Alaska",
    abbr: "AK",
    counties: [
      {
        name: "Anchorage Municipality",
        description: "Anchorage, Alaska's largest city, concentrates the state's most advanced medical facilities including Providence Alaska Medical Center. The area's remote patient population often requires sophisticated telehealth billing and cross-border payer coordination.",
      },
      {
        name: "Fairbanks North Star Borough",
        description: "Home to the University of Alaska Fairbanks and Bassett Army Community Hospital, Fairbanks North Star Borough serves a military-affiliated and civilian population with unique TRICARE and Medicare billing requirements.",
      },
      {
        name: "Matanuska-Susitna Borough",
        description: "The Mat-Su Valley is Alaska's fastest-growing borough, with expanding suburban communities driving demand for primary care, pediatrics, and family medicine practices that navigate Medicaid and commercial payer enrollment.",
      },
      {
        name: "Kenai Peninsula Borough",
        description: "Kenai Peninsula's tourism and fishing economy supports seasonal healthcare demand, with challenges around rural provider credentialing, Medicare-dependent facilities, and telehealth reimbursement for isolated communities.",
      },
      {
        name: "Juneau City and Borough",
        description: "Alaska's capital is isolated by geography, making Juneau a hub for specialty referrals and state employee health plan billing. The region faces ongoing challenges with provider recruitment and travel medicine billing.",
      },
      {
        name: "Ketchikan Gateway Borough",
        description: "Southeast Alaska's gateway borough relies heavily on ferry and air access, creating unique challenges for specialty care coordination, prior authorization workflows, and timely claim submission from isolated clinics.",
      },
      {
        name: "Bethel Census Area",
        description: "One of the most remote populated regions in the United States, Bethel's Yukon-Kuskokwim Delta clinics serve a predominantly Yup'ik population with high Medicaid enrollment and complex Indian Health Service billing protocols.",
      },
      {
        name: "Sitka City and Borough",
        description: "Sitka's Southeast Alaska location makes it a critical healthcare hub for surrounding communities, with Sitka Community Hospital serving a fishing-industry population with elevated workplace injury and orthopedic billing volume.",
      },
      {
        name: " Valdez-Cordova Census Area",
        description: "The trans-Alaska pipeline corridor communities of Valdez and Cordova face occupational medicine billing demands tied to oil, fishing, and tourism industries, alongside isolated rural healthcare access challenges.",
      },
      {
        name: " Nome Census Area",
        description: "Nome serves as a regional health hub for the Seward Peninsula, where remote village clinics depend on telehealth reimbursement and Indian Health Service contract health service billing for sustainability.",
      },
    ],
  },
  {
    slug: "arizona",
    name: "Arizona",
    abbr: "AZ",
    counties: [
      {
        name: "Maricopa County",
        description: "Home to Phoenix and Scottsdale, Maricopa County is one of the nation's fastest-growing counties and Arizona's dominant healthcare market. Mayo Clinic, Banner Health, and HonorHealth anchor a payer mix that skews toward Medicare Advantage and commercial HMOs.",
      },
      {
        name: "Pima County",
        description: "Tucson's healthcare ecosystem includes Banner — University Medical Center and the VA Health Care System. Pima County's large Medicare population and growing snowbird seasonal residents create seasonal billing volume fluctuations.",
      },
      {
        name: "Pinal County",
        description: "Arizona's fastest-growing county by percentage, Pinal County's expanding suburban communities around Casa Grande and Apache Junction drive demand for primary care and specialty billing as new practices enter the market.",
      },
      {
        name: "Yavapai County",
        description: "Prescott and Sedona anchor Yavapai County, where a large retiree population generates consistent Medicare billing volume and a growing wellness and orthopedic service line across the county's community hospitals.",
      },
      {
        name: "Yuma County",
        description: "A major agricultural hub on the U.S.-Mexico border, Yuma County's seasonal farmworker population creates significant Medicaid and community health center billing demand alongside growing Medicare enrollment in the retiree community.",
      },
      {
        name: "Mohave County",
        description: "Lake Havasu, Kingman, and Bullhead City anchor Mohave County's retiree and tourism-driven healthcare market, where Medicare Advantage enrollment is among the highest in Arizona and orthopedic and cardiac billing are prominent.",
      },
      {
        name: "Cochise County",
        description: "Fort Huachuca's military presence in Cochise County drives TRICARE billing alongside a growing civilian population, with Sierra Vista emerging as a hub for family medicine and behavioral health billing coordination.",
      },
      {
        name: "Navajo County",
        description: "Navajo County's combination of tribal lands, rural communities, and growing Flagstaff-spillover populations requires careful navigation of Indian Health Service, Medicaid, and Medicare billing across multiple distinct facilities.",
      },
      {
        name: "Gila County",
        description: "Pine's retirement communities and Payson's small-town healthcare needs drive Gila County's billing toward Medicare, with community health centers and rural health clinics handling a significant portion of the county's underserved populations.",
      },
      {
        name: "Graham County",
        description: "Safford and the Thatcher communities anchor Graham County, where agricultural employment and tribal populations drive Medicaid enrollment and rural health clinic billing alongside a growing telehealth presence.",
      },
    ],
  },
  {
    slug: "arkansas",
    name: "Arkansas",
    abbr: "AR",
    counties: [
      {
        name: "Pulaski County",
        description: "Little Rock, Arkansas's capital, is the state's healthcare headquarters with UAMS Medical Center, Arkansas Children's Hospital, and Baptist Health. The county's academic and specialty billing complexity reflects its role as the state's referral center.",
      },
      {
        name: "Benton County",
        description: "Home to Bentonville and the Walmart corporate ecosystem, Benton County's high-income population supports specialty practices in orthopedics, dermatology, and executive wellness with strong commercial payer profiles.",
      },
      {
        name: "Washington County",
        description: "Fayetteville and the University of Arkansas anchor Washington County, where a growing tech-sector population and university community create demand for diverse specialty services alongside strong commercial insurance coverage.",
      },
      {
        name: "Sebastian County",
        description: "Fort Smith's healthcare hub, Sebastian County blends manufacturing-industry employee health needs with a significant Medicaid population, creating a payer mix that requires careful AR management and denial follow-up workflows.",
      },
      {
        name: "Faulkner County",
        description: "Conway's rapid growth has made Faulkner County a primary care and specialty expansion market, with growing commercial payer enrollment as new residents move from Pulaski County's saturation.",
      },
      {
        name: "Saline County",
        description: "Benton and Bryant anchor Saline County's suburban growth corridor south of Little Rock, where new practice development and commercial payer credentialing have kept pace with the county's expanding residential base.",
      },
      {
        name: "Craighead County",
        description: "Jonesboro, the second-largest city in Arkansas, anchors Craighead County as a regional healthcare hub for Northeast Arkansas with a mix of community hospitals, specialty referral networks, and growing Medicare enrollment.",
      },
      {
        name: "Jefferson County",
        description: "Pine Bluff's historical significance as an Arkansas economic center is reflected in Jefferson County's established healthcare infrastructure, which serves a predominantly Medicaid and Medicare population with significant chronic disease management needs.",
      },
      {
        name: "Lonoke County",
        description: "Cabot and Lonoke serve as bedroom communities driving Lonoke County's growth, where billing demands center on primary care and pediatric services with a mix of commercial and Arkansas Works Medicaid enrollment.",
      },
      {
        name: "White County",
        description: "Searcy and Beebe anchor White County, where Baptist Health's regional presence drives specialty referrals and a growing rural health clinic network serves the county's dispersed agricultural communities.",
      },
    ],
  },
  {
    slug: "california",
    name: "California",
    abbr: "CA",
    counties: [
      {
        name: "Los Angeles County",
        description: "The nation's most populous county, Los Angeles County's healthcare market is defined by its sheer scale, ethnic diversity, and payer complexity. Kaiser Permanente, UCLA Health, and Cedars-Sinai anchor a landscape where Medicaid, Medicare Advantage, and commercial HMO models dominate.",
      },
      {
        name: "San Diego County",
        description: "San Diego's military-affiliated population drives significant TRICARE and VA billing alongside a strong commercial Kaiser presence. Scripps and Sharp HealthCare compete for a commercially insured suburban population with high managed care penetration.",
      },
      {
        name: "Santa Clara County",
        description: "Silicon Valley's home, Santa Clara County's tech-industry workforce generates premium commercial payer profiles and executive wellness billing. Stanford Health Care and Kaiser Santa Clara anchor a high-acuity referral network for complex specialty care.",
      },
      {
        name: "Orange County",
        description: "OC's diverse population ranges from Irvine's affluent suburbs to Santa Ana's safety-net needs. Hoag, Providence St. Joseph, and Kaiser anchor the market, with significant Medicare Advantage and commercial HMO enrollment across the county.",
      },
      {
        name: "San Francisco County",
        description: "UCSF Medical Center and the SF Health Network anchor San Francisco County's academic and safety-net dual-track healthcare system, serving a population that spans tech wealth and significant homelessness-related healthcare needs.",
      },
      {
        name: "Alameda County",
        description: "Oakland and Berkeley anchor Alameda County's healthcare landscape, where Highland Hospital's safety-net role coexists with Kaiser Permanente's large HMO enrollment and a growing specialty referral network centered on UCSF-Benioff Children's Hospital Oakland.",
      },
      {
        name: "Sacramento County",
        description: "California's capital region blends Kaiser Sacramento, UC Davis Medical Center, and Dignity Health's regional presence. Sacramento County's large Medicaid enrollment and growing Medicare base create a distinctive payer mix requiring careful authorization workflows.",
      },
      {
        name: "Riverside County",
        description: "Inland Southern California's fastest-growing county, Riverside County's expansion from Coachella Valley to Murrieta creates billing demand across both affluent retirement communities and the Eastern Coachella Valley's agricultural worker health needs.",
      },
      {
        name: "San Bernardino County",
        description: "Ontario and Rancho Cucamonga anchor San Bernardino County's sprawling healthcare market, where Dignity Health and Kaiser serve a large Medicaid and uninsured population alongside growing Medicare Advantage enrollment.",
      },
      {
        name: "Fresno County",
        description: "Fresno County's agricultural economy supports a large Medi-Cal population and significant community health center presence. Community Medical Providers and Valley Children's Healthcare serve as referral anchors for a geographically dispersed rural catchment area.",
      },
    ],
  },
  {
    slug: "colorado",
    name: "Colorado",
    abbr: "CO",
    counties: [
      {
        name: "Denver County",
        description: "Colorado's capital and largest city, Denver County is the state's healthcare headquarters with UCHealth University of Colorado Hospital, National Jewish Health, and a dense network of specialty practices serving a commercially insured and Medicare混合 population.",
      },
      {
        name: "El Paso County",
        description: "Colorado Springs, home to multiple military installations, anchors El Paso County with significant TRICARE and VA billing alongside a growing civilian population. UCHealth and Penrose-St. Francis compete in a market with strong commercial managed care penetration.",
      },
      {
        name: "Arapahoe County",
        description: "Centennial and Aurora make Arapahoe County Denver's largest suburban county, where UCHealth and HCA Healthcare serve an expanding population with strong commercial and Medicare Advantage enrollment across new residential developments.",
      },
      {
        name: "Jefferson County",
        description: "Lakewood and Golden anchor Jefferson County's mix of suburban Denver communities, where St. Anthony's Hospital and the Kaiser Permanente service area serve a predominantly commercial and Medicare population with high primary care utilization.",
      },
      {
        name: "Boulder County",
        description: "Boulder and Longmont define Boulder County's health-conscious, affluent population, where Boulder Community Health and UCHealth Boulder serve patients with strong commercial insurance, low Medicaid enrollment, and growing Medicare needs.",
      },
      {
        name: "Adams County",
        description: "Thornton and Brighton anchor Adams County's rapid suburban growth, where North Suburban Medical Center and the growing Kaiser service area serve an increasingly diverse population with rising Medicaid and commercial enrollment.",
      },
      {
        name: "Larimer County",
        description: "Fort Collins and Loveland anchor Larimer County, where Banner Health and UCHealth serve a growing tech-sector and university population with a payer mix skewed toward commercial and Medicare enrollment.",
      },
      {
        name: "Douglas County",
        description: "Castle Rock and Parker anchor Douglas County, one of Colorado's wealthiest and fastest-growing counties. The area's high commercial insurance penetration and large Medicare population support specialty practices in cardiology, orthopedics, and oncology.",
      },
      {
        name: "Pueblo County",
        description: "Pueblo's steel-industry heritage shapes Pueblo County's healthcare economy, where Parkview Medical Center and St. Mary-Corwin serve a predominantly Medicare and Medicaid population with significant chronic disease management billing needs.",
      },
      {
        name: "Weld County",
        description: "Greeley and Windsor anchor Weld County's agricultural-to-suburban transition, where North Colorado Medical Center and the growing Banner Northern Colorado network serve an increasingly diverse population with rising Medicaid and commercial enrollment.",
      },
    ],
  },
  {
    slug: "connecticut",
    name: "Connecticut",
    abbr: "CT",
    counties: [
      {
        name: "Fairfield County",
        description: "Connecticut's wealthiest county, Fairfield County's proximity to New York City creates a high-acuity specialty referral market. Yale New Haven Health and Nuvance Health serve an affluent population with strong commercial and Medicare Advantage coverage.",
      },
      {
        name: "Hartford County",
        description: "Hartford, Connecticut's capital, anchors Hartford County with Hartford Hospital and Trinity Health of New England serving a population that blends state government employees, hospital system employees, and significant Medicare enrollment.",
      },
      {
        name: "New Haven County",
        description: "Yale New Haven Hospital anchors New Haven County as one of the Northeast's leading academic medical centers, serving a payer mix dominated by commercial insurance, Yale's employee health plans, and a growing Medicare population.",
      },
      {
        name: "New London County",
        description: "Groton's naval submarine base drives TRICARE billing across New London County alongside Lawrence + Memorial Hospital's community care network, serving a population with significant military-affiliated and commercial insurance coverage.",
      },
      {
        name: "Litchfield County",
        description: "Northwest Connecticut's rural character shapes Litchfield County's healthcare landscape, where Charlotte Hungerford Hospital and community health centers serve a predominantly Medicare population across dispersed small-town communities.",
      },
      {
        name: "Middlesex County",
        description: "Middletown anchors Middlesex County's healthcare market with Middlesex Hospital (affiliated with Yale), serving a suburban population with strong commercial and Medicare enrollment in Connecticut's River Valley communities.",
      },
      {
        name: "Windham County",
        description: "Northeast Connecticut's rural Windham County relies on Day Kimball Hospital and community health centers to serve a population with significant Medicaid enrollment, agricultural-industry occupational health needs, and growing telehealth adoption.",
      },
      {
        name: "Tolland County",
        description: "University of Connecticut's presence in Storrs shapes Tolland County's demographic, where commercial insurance from university employment and UConn Health's specialty referral network serve a young, growing suburban population.",
      },
      {
        name: "Westchester County",
        description: "While technically New York's Westchester County, its Connecticut-border communities like Greenwich and Stamford are often referenced in regional healthcare discussions. White Plains Hospital and Boston Children's affiliates serve a wealthy commuter and pediatric population.",
      },
      {
        name: "Duchess County",
        description: "Partially overlapping New York's Hudson Valley healthcare market, Duchess County's Connecticut-border communities like Pawling and Dover Plains access care through Sharon Hospital and Sharon's rural healthcare network serving Medicare-dependent rural populations.",
      },
    ],
  },
  {
    slug: "delaware",
    name: "Delaware",
    abbr: "DE",
    counties: [
      {
        name: "New Castle County",
        description: "Delaware's most populous county, New Castle County is home to Wilmington and Newark. ChristianaCare's flagship hospital and the Nemours Children's Hospital anchor a market where commercial insurance, Medicare, and Medicaid populations all have significant representation.",
      },
      {
        name: "Sussex County",
        description: "Delaware's fastest-growing county, Sussex County's Cape Region and Rehoboth Beach retirement communities generate the state's highest Medicare billing volume. Beebe Healthcare and TidalHealth serve an expanding senior population with growing specialty needs.",
      },
      {
        name: "Kent County",
        description: "Dover, Delaware's capital, anchors Kent County where Bayhealth Medical Center serves a military-affiliated population near Dover Air Force Base alongside growing suburban communities with rising commercial and Medicaid enrollment.",
      },
    ],
  },
  {
    slug: "florida",
    name: "Florida",
    abbr: "FL",
    counties: [
      {
        name: "Miami-Dade County",
        description: "Florida's most populous county, Miami-Dade's bilingual population and large Medicare Advantage penetration make it one of the nation's most complex managed care markets. Baptist Health South Florida and Jackson Health System anchor a payer landscape dominated by Medicare Advantage HMOs.",
      },
      {
        name: "Broward County",
        description: "Fort Lauderdale and Coral Springs anchor Broward County, where Memorial Healthcare System and HCA Florida Healthcare serve a growing retiree and commuter population with some of the nation's highest Medicare Advantage and commercial HMO enrollment.",
      },
      {
        name: "Palm Beach County",
        description: "West Palm Beach and Boca Raton define Palm Beach County's affluent retiree market, where Tenet Healthcare's Palm Beach Gardens Medical Center and Baptist Health South Florida's Boca Raton Regional Hospital serve a predominantly Medicare population.",
      },
      {
        name: "Hillsborough County",
        description: "Tampa anchors Florida's third-largest county, where Tampa General Hospital, BayCare Health System, and HCA Florida serve a diverse payer mix spanning Medicare Advantage, Medicaid, and commercial coverage across urban and suburban communities.",
      },
      {
        name: "Orange County",
        description: "Orlando's tourism economy shapes Orange County's healthcare market, where Orlando Health and AdventHealth compete for a population that ranges from theme park employees (Medicaid) to wealthy retirees (Medicare Advantage) with significant seasonal volume fluctuations.",
      },
      {
        name: "Duval County",
        description: "Jacksonville, Florida's largest city by area, anchors Duval County with Baptist Health, Ascension St. Vincent's, and HCA Florida University/KB Regional serving a large military-affiliated population (Naval Station Mayport) with significant TRICARE billing.",
      },
      {
        name: "Pinellas County",
        description: "Clearwater and St. Petersburg anchor Pinellas County's large retiree population, where BayCare's Morton Plant Mease hospitals and HCA Florida Bayonet Point serve one of Florida's highest Medicare density markets with strong cardiovascular and orthopedic billing.",
      },
      {
        name: "Lee County",
        description: "Fort Myers and Cape Coral define Lee County's explosive growth, where Lee Health and NCH Healthcare System serve a rapidly expanding retiree population with high Medicare Advantage enrollment and growing demand for specialty and surgical services.",
      },
      {
        name: "Polk County",
        description: "Lakeland and Winter Haven anchor Polk County's Central Florida expansion, where Lakeland Regional Health and AdventHealth Heart of Florida serve a growing Medicare population alongside a significant Medicaid base in Florida's citrus agricultural communities.",
      },
      {
        name: "Brevard County",
        description: "Cocoa Beach and Melbourne anchor Brevard County's Space Coast, where Health First and Parrish Medical Center serve a retiree and aerospace-industry population with strong Medicare enrollment and growing specialty referral needs to Orlando's academic centers.",
      },
    ],
  },
  {
    slug: "georgia",
    name: "Georgia",
    abbr: "GA",
    counties: [
      {
        name: "Fulton County",
        description: "Atlanta's urban core, Fulton County is Georgia's healthcare headquarters with Emory Healthcare, Piedmont Healthcare, and Grady Memorial Hospital anchoring a market that spans inner-city safety-net needs and affluent Buckhead specialty practice demand.",
      },
      {
        name: "DeKalb County",
        description: "Atlanta's east side, DeKalb County is home to Emory Decatur Hospital and a growing outpatient specialty network serving a diverse population from Decatur's university community to Lithonia's suburban expansion.",
      },
      {
        name: "Cobb County",
        description: "Marietta and Kennesaw anchor Cobb County's affluent suburban growth, where WellStar Health System's flagship and AdventHealth's growing presence serve a commercially insured and Medicare population with strong specialty utilization.",
      },
      {
        name: "Gwinnett County",
        description: "Georgia's most populous suburban county, Gwinnett County's diverse immigrant population and rapid residential growth drive demand for primary care and specialty practices navigating Medicaid, commercial, and Medicare enrollment across multiple language needs.",
      },
      {
        name: "Chatham County",
        description: "Savannah anchors Chatham County with Memorial Health University Medical Center and St. Joseph's/Candler serving a military-affiliated population (Hunter Army Airfield) and a growing coastal retirement community with significant Medicare enrollment.",
      },
      {
        name: "Clayton County",
        description: "Atlanta's southern gateway, Clayton County's proximity to Hartsfield-Jackson Atlanta International Airport drives healthcare demand from airport workers and logistics-industry employees alongside a significant Medicaid population requiring careful eligibility management.",
      },
      {
        name: "Hall County",
        description: "Gainesville anchors Hall County as Northeast Georgia's healthcare hub, where Northeast Georgia Medical Center serves a population spanning Appalachian rural communities and Atlanta-spillover suburban growth with expanding specialty referral networks.",
      },
      {
        name: "Muscogee County",
        description: "Columbus, Georgia's second-largest city, anchors Muscogee County on the Alabama border where St. Francis Hospital and Piedmont Columbus Regional serve a tri-state population with significant military affiliation (Fort Benning) and growing commercial enrollment.",
      },
      {
        name: "Richmond County",
        description: "Augusta, Georgia's eastern healthcare hub, anchors Richmond County with the Medical College of Georgia and AU Health System serving as the state's second-largest academic medical center serving a large Medicare and Medicaid population.",
      },
      {
        name: "Forsyth County",
        description: "One of Georgia's wealthiest and fastest-growing counties, Forsyth County's suburban affluent population supports specialty practices in orthopedics, dermatology, and cardiovascular care with strong commercial and Medicare Advantage enrollment.",
      },
    ],
  },
  {
    slug: "hawaii",
    name: "Hawaii",
    abbr: "HI",
    counties: [
      {
        name: "Honolulu County",
        description: "Oahu's Honolulu County contains the state's largest population and healthcare infrastructure, anchored by The Queen's Medical Center and Kaiser Permanente Hawaii. The market is dominated by HMOs and serves a unique mix of military, Native Hawaiian, and Pacific Islander populations.",
      },
      {
        name: "Hawaii County",
        description: "The Big Island's Hawaii County spans dramatic geographic diversity from Hilo to Kona, where Hilo Medical Center and Kona Community Hospital serve a Medicare-heavy rural population with significant Native Hawaiian health needs and growing medical tourism.",
      },
      {
        name: "Maui County",
        description: "Maui County's tourism-driven economy shapes its healthcare landscape, where Maui Health System and Maui Medical Group serve a population that swells seasonally with visitors and serves a significant retiree and remote-worker community year-round.",
      },
      {
        name: "Kauai County",
        description: "Kauai's isolated island geography creates unique healthcare billing challenges, where Hawaii Pacific Health's Wilcox Medical Center serves a Medicare-heavy retiree population with limited specialty access requiring careful referral authorization and telehealth billing.",
      },
    ],
  },
  {
    slug: "idaho",
    name: "Idaho",
    abbr: "ID",
    counties: [
      {
        name: "Ada County",
        description: "Boise, Idaho's capital and largest city, anchors Ada County where St. Luke's Health System and Saint Alphonsus Regional Medical Center serve the state's fastest-growing metropolitan area with strong commercial insurance and growing Medicare enrollment.",
      },
      {
        name: "Canyon County",
        description: "Caldwell and Nampa anchor Canyon County's rapid suburban growth, where Saltzer Health and St. Luke's Nampa serve a population transitioning from rural agricultural employment to suburban commercial and service-industry coverage.",
      },
      {
        name: "Kootenai County",
        description: "Coeur d'Alene anchors Kootenai County's lakefront retirement community growth, where Kootenai Health and the growing Providence network serve a Medicare-heavy population drawn by Idaho's tax-friendly environment for retirees.",
      },
      {
        name: "Bonneville County",
        description: "Idaho Falls anchors Bonneville County as Eastern Idaho's healthcare hub, where Eastern Idaho Regional Medical Center and the Idaho Falls Community Hospital serve a population spanning the Idaho National Laboratory workforce to surrounding rural agriculture.",
      },
      {
        name: "Bannock County",
        description: "Pocatello and Idaho State University anchor Bannock County where Portneuf Medical Center serves a mixed commercial, Medicaid, and Medicare population with significant university-employee health plan billing alongside a growing rural patient base.",
      },
      {
        name: "Twin Falls County",
        description: "Twin Falls serves as South Central Idaho's healthcare and agricultural hub, where St. Luke's Magic Valley Medical Center serves a population spanning dairy-farmworker Medicaid patients to growing suburban commercial enrollment.",
      },
      {
        name: "Blaine County",
        description: "Sun Valley and Ketchum anchor Blaine County's ultra-affluent resort economy, where St. Luke's Wood River Medical Center serves a population with the highest per-capita income in Idaho and exceptional commercial insurance profiles.",
      },
      {
        name: "Bingham County",
        description: "Blackfoot anchors Bingham County's agricultural and Idaho National Laboratory-adjacent economy, where Bingham Memorial Hospital serves a rural population with significant Medicare and Medicaid enrollment alongside growing energy-sector commercial coverage.",
      },
      {
        name: "Gem County",
        description: "Emmett anchors Gem County's small-town Idaho healthcare market, where Valor Health serves a predominantly Medicare population in a rural community with limited specialty access requiring regular referral coordination with Ada County specialists.",
      },
      {
        name: "Jefferson County",
        description: "Rigby anchors Jefferson County's rural eastern Idaho communities, where Jefferson Healthcare serves an agricultural population with growing suburban-spillover demand as Idaho Falls and Bonneville County's growth extends into surrounding rural areas.",
      },
    ],
  },
  {
    slug: "illinois",
    name: "Illinois",
    abbr: "IL",
    counties: [
      {
        name: "Cook County",
        description: "Chicago and its suburbs define Cook County as the nation's second-most populous county and Illinois' healthcare headquarters. Northwestern Memorial, Rush University Medical Center, and the Cook County Health system anchor a market with extraordinary payer diversity from Medicaid managed care to premium commercial products.",
      },
      {
        name: "Lake County",
        description: "North Shore Chicago suburbs and the corporate campuses around Vernon Hills anchor Lake County's affluent population, where Northwestern Medicine and Advocate Aurora Health serve strong commercial and Medicare Advantage enrollment.",
      },
      {
        name: "DuPage County",
        description: "Oak Brook and Naperville define DuPage County as Illinois' wealthiest suburban county, where Northwestern Medicine Central DuPage and Amita Health serve an affluent commuter population with strong commercial and Medicare Advantage penetration.",
      },
      {
        name: "Will County",
        description: "Joliet and the southwest suburban expansion anchor Will County's rapid population growth, where Ascension Provena Saint Joseph and Silver Cross Hospital serve a diversifying payer mix from manufacturing employees to suburban commuters.",
      },
      {
        name: "Kane County",
        description: "Aurora and Elgin anchor Kane County's diverse population from affluent suburbs to significant Latino agricultural communities, where Rush Copley Medical Center and Advocate Sherman Hospital serve a payer mix spanning Medicaid to Medicare Advantage.",
      },
      {
        name: "McHenry County",
        description: "McHenry County's exurban growth northwest of Chicago creates healthcare demand across communities from Crystal Lake to Harvard, where Northwestern Medicine Huntley and Mercyhealth Crystal Lake serve a growing Medicare and commercial population.",
      },
      {
        name: "Sangamon County",
        description: "Springfield, Illinois' capital, anchors Sangamon County with HSHS St. John's Hospital and SIU Medicine serving a government-employee-heavy population alongside significant Medicare enrollment from the state's largest veterans population.",
      },
      {
        name: "St. Clair County",
        description: "Belleville and the Metro East St. Louis suburbs anchor St. Clair County where HSHS St. Elizabeth's Hospital and BJC HealthCare's Memorial Hospital serve a population navigating post-industrial economic transitions with significant Medicaid enrollment.",
      },
      {
        name: "Champaign County",
        description: "Champaign-Urbana and the University of Illinois anchor Champaign County's healthcare market, where Carle Foundation Hospital serves as a regional referral center for central Illinois, serving a payer mix from university employee plans to rural Medicare.",
      },
      {
        name: "Peoria County",
        description: "Peoria anchors Central Illinois' largest healthcare market with OSF Saint Francis Medical Center serving a tri-county region with significant Medicare enrollment, a historic manufacturing-industry base, and growing telemedicine adoption.",
      },
    ],
  },
  {
    slug: "indiana",
    name: "Indiana",
    abbr: "IN",
    counties: [
      {
        name: "Marion County",
        description: "Indianapolis, Indiana's capital and largest city, anchors Marion County with IU Health's flagship Methodist Hospital and Ascension St. Vincent serving a diverse population spanning urban safety-net needs to affluent suburban specialty demand.",
      },
      {
        name: "Lake County",
        description: "Gary and the Calumet Region anchor Lake County's post-industrial healthcare market, where Community Hospital and Franciscan Health serve a population with significant Medicare and Medicaid enrollment alongside a growing suburban commuter population.",
      },
      {
        name: "Allen County",
        description: "Fort Wayne, Indiana's second-largest city, anchors Allen County with Parkview Health and Lutheran Health Network serving northeastern Indiana with strong commercial coverage from manufacturing employment and growing Medicare enrollment.",
      },
      {
        name: "Vigo County",
        description: "Terre Haute anchors Vigo County as West Central Indiana's healthcare hub, where Union Health and Terre Haute Regional Hospital serve a population spanning Indiana State University employees to surrounding rural agricultural communities.",
      },
      {
        name: "Delaware County",
        description: "Muncie and Ball State University anchor Delaware County where IU Health Ball Memorial Hospital serves East Central Indiana with a payer mix balancing university employee plans, manufacturing commercial coverage, and significant Medicare enrollment.",
      },
      {
        name: " Vanderburgh County",
        description: "Evansville, Indiana's third-largest city, anchors Vanderburgh County with Deaconess Health System and Ascension St. Vincent Evansville serving a tri-state Ohio River population with strong commercial coverage and growing Medicare needs.",
      },
      {
        name: "St. Joseph County",
        description: "South Bend and the University of Notre Dame anchor St. Joseph County where Beacon Health System and Saint Joseph Regional Medical Center serve a diverse population from university-affiliated employment to rural Michigan-border communities.",
      },
      {
        name: "Tippecanoe County",
        description: "Lafayette and Purdue University anchor Tippecanoe County where IU Health Arnett and Franciscan Health Lafayette serve a growing population balancing university, manufacturing, and pharmaceutical industry employment with strong commercial coverage.",
      },
      {
        name: "Madison County",
        description: "Anderson anchors Madison County's post-industrial healthcare market, where Ascension St. Vincent Anderson and Community Hospital Anderson serve a population with significant Medicare enrollment and legacy manufacturing employer coverage transitions.",
      },
      {
        name: "Monroe County",
        description: "Bloomington and Indiana University anchor Monroe County where IU Health Bloomington Hospital and Monroe Medical Group serve a growing population from university employment and the Bloomington tech-sector spillover from Indianapolis.",
      },
    ],
  },
  {
    slug: "iowa",
    name: "Iowa",
    abbr: "IA",
    counties: [
      {
        name: "Polk County",
        description: "Des Moines, Iowa's capital and largest city, anchors Polk County with UnityPoint Health-Des Moines and Broadlawns Medical Center serving a population spanning state government employment, insurance industry workers, and growing suburban commercial coverage.",
      },
      {
        name: "Linn County",
        description: "Cedar Rapids anchors Linn County as Iowa's second-largest city, where UnityPoint Health-Cedar Rapids and St. Luke's Hospital serve a population dominated by commercial insurance from manufacturing and technology employers alongside growing Medicare enrollment.",
      },
      {
        name: "Scott County",
        description: "Davenport and the Quad Cities anchor Scott County where Genesis Health System and UnityPoint Health-Trinity serve a tri-state population with significant union manufacturing coverage, Medicaid enrollment, and growing Medicare needs.",
      },
      {
        name: "Black Hawk County",
        description: "Waterloo and Cedar Falls anchor Black Hawk County with MercyOne Waterloo Medical Center and UnityPoint Health Allen Hospital serving a population spanning university employment (UNI) to significant Medicaid and Medicare enrollment.",
      },
      {
        name: "Johnson County",
        description: "Iowa City and the University of Iowa anchor Johnson County where University of Iowa Hospitals and Clinics serves as Iowa's premier academic medical center, serving a population from university employment to rural referral patients across the state.",
      },
      {
        name: "Dubuque County",
        description: "Dubuque anchors Dubuque County as a Mississippi River tri-state healthcare hub, where UnityPoint Health-Finley and Grand River Medical Group serve a population spanning manufacturing employment to significant Medicare enrollment in Iowa's oldest river city.",
      },
      {
        name: "Pottawattamie County",
        description: "Council Bluffs anchors Pottawattamie County's role as Iowa's western gateway, where CHI Mercy and Jennie Edmundson Hospital serve a population navigating the Omaha metro's healthcare market spillover with growing commercial enrollment.",
      },
      {
        name: "Story County",
        description: "Ames and Iowa State University anchor Story County where Mary Greeley Medical Center serves a population dominated by ISU employment and a significant Medicaid and Medicare enrollment from surrounding rural agricultural communities.",
      },
      {
        name: "Woodbury County",
        description: "Sioux City anchors Woodbury County as Iowa's western healthcare hub, where MercyOne Sioux City Medical Center and UnityPoint Health-St. Luke's serve a tri-state population with significant Medicaid enrollment and manufacturing commercial coverage.",
      },
      {
        name: "Cerro Gordo County",
        description: "Mason City anchors Cerro Gordo County as North Central Iowa's healthcare hub, where MercyOne North Iowa Medical Center serves a predominantly Medicare population across a large rural geographic catchment area.",
      },
    ],
  },
  {
    slug: "kansas",
    name: "Kansas",
    abbr: "KS",
    counties: [
      {
        name: "Sedgwick County",
        description: "Wichita, Kansas' largest city and aviation manufacturing hub, anchors Sedgwick County where Ascension Via Christi and Wesley Healthcare serve a population dominated by commercial insurance from Boeing, Spirit AeroSystems, and healthcare employment.",
      },
      {
        name: "Johnson County",
        description: "Overland Park and Kansas City's Kansas suburbs anchor Johnson County as Kansas' wealthiest and fastest-growing county, where Shawnee Mission Health and AdventHealth Shawnee Mission serve an affluent suburban population with strong commercial and Medicare Advantage enrollment.",
      },
      {
        name: "Douglas County",
        description: "Lawrence and the University of Kansas anchor Douglas County where LMH Health serves a population blending university employment, high-tech startup growth, and significant Medicaid enrollment from the surrounding rural service area.",
      },
      {
        name: "Reno County",
        description: "Hutchinson anchors Reno County as Central Kansas' healthcare hub, where Hutchinson Regional Medical Center serves a population spanning agricultural employment to significant Medicare enrollment in a geographically dispersed rural market.",
      },
      {
        name: "Riley County",
        description: "Manhattan and Kansas State University anchor Riley County where Ascension Via Christi St. Joseph and the Kansas State University Health Center serve a military-affiliated population near Fort Riley with TRICARE and university employee health plans.",
      },
      {
        name: "Shawnee County",
        description: "Topeka, Kansas' capital, anchors Shawnee County with Stormont Vail Health and the Topeka VA Medical Center serving a population dominated by state government employment and significant Medicare enrollment from the surrounding rural service area.",
      },
      {
        name: "Butler County",
        description: "El Dorado anchors Butler County's growing suburban Wichita bedroom community, where Ascension Via Christi St. Joseph in FLINT Hills serves an increasingly suburban population with rising commercial enrollment alongside significant Medicare needs.",
      },
      {
        name: "Finney County",
        description: "Garden City anchors Finney County's agricultural economy (cattle, pork, vegetables), where St. Catherine Hospital serves a large Latino immigrant workforce population with significant Medicaid and community health center billing demands.",
      },
      {
        name: "Ford County",
        description: "Dodge City anchors Ford County where Western Plains Medical Complex serves a meatpacking-industry workforce with significant Medicaid enrollment alongside growing Medicare needs from the surrounding rural agricultural communities.",
      },
      {
        name: " Crawford County",
        description: "Pittsburg and Girard anchor Crawford County where Ascension Via Christi Hospital in Pittsburg serves a population spanning Four States Otheosis Medical Center's tri-state referral network with significant Medicare and Medicaid enrollment.",
      },
    ],
  },
  {
    slug: "kentucky",
    name: "Kentucky",
    abbr: "KY",
    counties: [
      {
        name: "Jefferson County",
        description: "Louisville, Kentucky's largest city, anchors Jefferson County with UofL Health and Baptist Health Louisville serving a population spanning urban Medicaid populations to suburban commercial coverage, with significant Medicare enrollment in Old Louisville and eastern Jefferson County.",
      },
      {
        name: "Fayette County",
        description: "Lexington, Kentucky's second-largest city and horse capital, anchors Fayette County with UK HealthCare and CHI St. Joseph Health serving a population blending university employment, healthcare industry workers, and a growing retiree community.",
      },
      {
        name: "Kenton County",
        description: "Covington and the Cincinnati Northern Kentucky suburbs anchor Kenton County where St. Elizabeth Healthcare and the University of Kentucky's Northern Kentucky presence serve a population with strong commercial coverage from Fortune 500 companies.",
      },
      {
        name: "Hardin County",
        description: "Elizabethtown and Fort Knox nearby anchor Hardin County where Hardin Memorial Health and UofL Health–Flaget Memorial serve a military-affiliated population with significant TRICARE billing alongside growing suburban commercial enrollment.",
      },
      {
        name: "Pike County",
        description: "Eastern Kentucky's coal country healthcare hub, Pike County's Appalachian Regional Healthcare and Pikeville Medical Center serve a population facing the opioid epidemic's aftermath with significant Medicare and Medicaid enrollment and complex behavioral health billing.",
      },
      {
        name: "Boone County",
        description: "Burlington and the Florence-Burlington retail hub anchor Boone County where St. Elizabeth Healthcare serves the northern Kentucky commercial and residential boom with strong commercial coverage from the Cincinnati retail and logistics industry.",
      },
      {
        name: "Warren County",
        description: "Bowling Green anchors Warren County as South Central Kentucky's healthcare hub, where Med Center Health and TriStar Greenview Regional Hospital serve a population spanning Western Kentucky University employment to surrounding rural communities.",
      },
      {
        name: "Campbell County",
        description: "Newport and Bellevue anchor Campbell County's Northern Kentucky riverside communities, where St. Elizabeth Ft. Thomas and the Christ Hospital Spine and Orthopedic Institute serve a suburban population with strong commercial and Medicare coverage.",
      },
      {
        name: "Madison County",
        description: "Berea and Richmond anchor Madison County where Baptist Health Richmond and CHI Saint Joseph Health serve a population spanning Berea College's unique rural Appalachian healthcare training to growing suburban-spillover from Lexington.",
      },
      {
        name: "Christian County",
        description: "Hopkinsville and Fort Campbell nearby anchor Christian County's military-adjacent economy, where Jennie Stuart Medical Center serves a population with significant TRICARE billing alongside a growing civilian healthcare market serving the Tennessee border region.",
      },
    ],
  },
  {
    slug: "louisiana",
    name: "Louisiana",
    abbr: "LA",
    counties: [
      {
        name: "Orleans Parish",
        description: "New Orleans anchors Louisiana's healthcare market with Ochsner Health System's flagship and LSU Health Sciences Center serving a population spanning post-Katrina recovery neighborhoods, tourism-industry workers, and a growing tech-sector commuter base with diverse payer profiles.",
      },
      {
        name: "East Baton Rouge Parish",
        description: "Baton Rouge, Louisiana's capital, anchors East Baton Rouge Parish with Our Lady of the Lake Regional Medical Center and Baton Rouge General serving a population blending state government employment, petrochemical industry workers, and significant Medicaid enrollment.",
      },
      {
        name: "Jefferson Parish",
        description: "New Orleans' western suburbs, Jefferson Parish is home to West Jefferson Medical Center and LCMC Health's expansion hospitals serving a population spanning from Metairie's affluent suburbs to the Algiers Point working-class communities with significant Medicare enrollment.",
      },
      {
        name: "Caddo Parish",
        description: "Shreveport, Louisiana's second-largest city, anchors Caddo Parish with Willis-Knighton Physician Group and Ochsner LSU Health Shreveport serving a population spanning healthcare employment, petrochemical workers, and significant Medicare and Medicaid enrollment.",
      },
      {
        name: "St. Tammany Parish",
        description: "Covington and the North Shore suburbs anchor St. Tammany Parish's affluent retirement community growth, where St. Tammany Parish Hospital and Ochsner Northshore serve a population with strong Medicare Advantage and commercial enrollment.",
      },
      {
        name: "Lafayette Parish",
        description: "Lafayette, Louisiana's Cajun cultural capital, anchors Lafayette Parish with Our Lady of Lourdes Regional Medical Center and LHC Group serving an energy-industry workforce and growing technology sector with strong commercial and Medicare coverage.",
      },
      {
        name: "Calcasieu Parish",
        description: "Lake Charles anchors Calcasieu Parish where Christus St. Patrick Hospital and Lake Charles Memorial Health System serve a population recovering from devastating hurricanes, with significant Medicaid enrollment and energy-industry commercial coverage.",
      },
      {
        name: "Tangipahoa Parish",
        description: "Hammond anchors Tangipahoa Parish as the Northshore gateway between Baton Rouge and the Mississippi Gulf Coast, where North Oaks Medical Center serves a population with significant Medicaid enrollment and growing Medicare needs.",
      },
      {
        name: "St. Bernard Parish",
        description: "Chalmette anchors St. Bernard Parish's post-Katrina recovery, where St. Bernard Parish Hospital serves a rebuilding residential community with significant Medicaid enrollment and community health center primary care billing.",
      },
      {
        name: "St. John the Baptist Parish",
        description: "LaPlace anchors St. John the Baptist Parish where River Parish Medical Center serves a population spanning Mississippi River industrial employment to the growing suburban communities of Laplace with mixed Medicare and commercial enrollment.",
      },
    ],
  },
  {
    slug: "maine",
    name: "Maine",
    abbr: "ME",
    counties: [
      {
        name: "Cumberland County",
        description: "Portland, Maine's largest city and coastal hub, anchors Cumberland County with Maine Medical Center serving as the state's only Level 1 trauma center, serving a payer mix from affluent coastal retirees on Medicare to growing commercial technology employment.",
      },
      {
        name: "York County",
        description: "Southern Maine's coastal communities from Kittery to Scarborough anchor York County where York Hospital and Southern Maine Health Care (affiliated with MaineHealth) serve a large Medicare population alongside seasonal tourist-industry healthcare workers.",
      },
      {
        name: "Penobscot County",
        description: "Bangor, Maine's second-largest city, anchors Penobscot County where Northern Light Eastern Maine Medical Center and St. Joseph Healthcare serve a predominantly Medicare and Medicaid population across a large rural geographic catchment area.",
      },
      {
        name: "Kennebec County",
        description: "Augusta, Maine's capital, anchors Kennebec County where MaineGeneral Medical Center serves a population balancing state government employment with significant Medicaid enrollment and growing Medicare needs in the central Maine agricultural communities.",
      },
      {
        name: "Androscoggin County",
        description: "Lewiston, Maine's second-largest city, anchors Androscoggin County where Central Maine Medical Center and St. Mary's Regional Medical Center serve a population spanning French-Canadian heritage communities to growing immigrant refugee resettlement neighborhoods.",
      },
      {
        name: "Aroostook County",
        description: "The northernmost county in the contiguous United States, Aroostook County's hospitals like Cary Medical Center serve a geographically isolated Medicare-heavy population with significant French-speaking communities and limited specialist access.",
      },
      {
        name: "Hancock County",
        description: "Bar Harbor and Acadia National Park's gateway anchor Hancock County where Northern Light Maine Coast Hospital serves a seasonal tourist economy alongside a growing remote-worker retiree community with significant Medicare enrollment.",
      },
      {
        name: "Somerset County",
        description: "Skowhegan anchors Somerset County's rural central Maine healthcare market, where Redington Fairview General Hospital serves a predominantly Medicare and Medicaid population across dispersed agricultural and forest-product communities.",
      },
      {
        name: "Waldo County",
        description: "Belfast and the midcoast communities anchor Waldo County where Waldo County General Hospital serves a growing artist and remote-worker population alongside traditional fishing and agricultural communities with significant Medicare enrollment.",
      },
      {
        name: "Oxford County",
        description: "Rumford and Norway anchor Oxford County's western Maine rural healthcare, where Rumford Hospital and Stephens Memorial Hospital (affiliated with MaineHealth) serve a predominantly Medicare population in economically transitional communities.",
      },
    ],
  },
  {
    slug: "maryland",
    name: "Maryland",
    abbr: "MD",
    counties: [
      {
        name: "Baltimore County",
        description: "Maryland's healthcare corridor, Baltimore County surrounds Baltimore City with LifeBridge Health and MedStar Health serving a population spanning from Towson's affluent suburbs to the urbanizing communities of Essex and Dundalk with diverse payer profiles.",
      },
      {
        name: "Montgomery County",
        description: "Maryland's wealthiest county, Montgomery County's biotech corridor and federal government employment generate exceptional commercial insurance profiles. MedStar Good Samaritan and Holy Cross Health serve a population with the state's highest managed care penetration.",
      },
      {
        name: "Prince George's County",
        description: "Maryland's second-most populous county, Prince George's County's federal government and military adjacency drives strong commercial coverage. Dimensions Healthcare and MedStar Southern Maryland Hospital Center serve a population with significant Medicaid enrollment.",
      },
      {
        name: "Baltimore City",
        description: "Maryland's independent city, Baltimore City is home to Johns Hopkins Hospital — one of the nation's premier academic medical centers. The payer mix spans from East Baltimore's Medicaid safety-net to Harbor East's affluent specialty practices.",
      },
      {
        name: "Anne Arundel County",
        description: "Annapolis and the Naval Academy anchor Anne Arundel County where Anne Arundel Medical Center and Baltimore Washington Medical Center serve a military-affiliated population with significant TRICARE billing alongside growing suburban commercial enrollment.",
      },
      {
        name: "Howard County",
        description: "Columbia and Ellicott City anchor Howard County, Maryland's most educated and wealthiest county, where Howard County General Hospital (affiliated with Johns Hopkins) serves a population with exceptional commercial and Medicare Advantage profiles.",
      },
      {
        name: "Frederick County",
        description: "Fort Detrick's biotech cluster and Frederick's Civil War heritage anchor Frederick County, where Frederick Health Hospital serves a population blending federal employment, growing tech-sector workers, and significant Medicare enrollment.",
      },
      {
        name: "Harford County",
        description: "Bel Air anchors Harford County's Susquehanna region suburban growth, where University of Maryland Upper Chesapeake Health serves a growing commuter population with strong commercial and Medicare enrollment between Baltimore and Philadelphia.",
      },
      {
        name: "Washington County",
        description: "Hagerstown anchors Washington County as Maryland's western gateway, where Meritus Medical Center (affiliated with Johns Hopkins) and Meritus Health serve a population spanning Appalachian rural communities to growing suburban commuters.",
      },
      {
        name: "Charles County",
        description: "Waldorf and the Southern Maryland suburban boom anchor Charles County, where MedStar St. Mary's Hospital serves a growing population with strong commercial enrollment from Washington DC commuter employment alongside significant Medicaid needs.",
      },
    ],
  },
  {
    slug: "massachusetts",
    name: "Massachusetts",
    abbr: "MA",
    counties: [
      {
        name: "Suffolk County",
        description: "Boston, Massachusetts' capital and New England's largest city, anchors Suffolk County with Massachusetts General Hospital, Brigham and Women's Hospital, and Boston Medical Center serving as one of the world's leading academic medical clusters with diverse payer profiles.",
      },
      {
        name: "Middlesex County",
        description: "Massachusetts' largest county by population, Middlesex County spans Cambridge and Newton with Massachusetts General Hospital's community affiliates and Tufts Medical Center serving a payer mix from biotech-industry employees to significant Medicaid enrollment.",
      },
      {
        name: "Essex County",
        description: "Salem and Lynn anchor Essex County where Salem Hospital and Lawrence General Hospital serve a population spanning historic tourist communities to significant Spanish-speaking immigrant populations with complex Medicaid managed care billing.",
      },
      {
        name: "Worcester County",
        description: "Worcester, Massachusetts' second-largest city, anchors Central Massachusetts with UMass Memorial Medical Center serving a population spanning university employment, healthcare workers, and significant Medicaid and Medicare enrollment across the county's urban-rural divide.",
      },
      {
        name: "Norfolk County",
        description: "Quincy and Brookline anchor Norfolk County where Brigham and Women's Faulkner Hospital and Boston Children's affiliated practices serve an affluent suburban population with strong commercial and Medicare Advantage enrollment.",
      },
      {
        name: "Bristol County",
        description: "Fall River and New Bedford anchor Bristol County where Charlton Memorial Hospital (Steward) and St. Luke's Hospital (Southcoast Health) serve a Portuguese and Cape Verdean immigrant population with significant Medicaid enrollment and a maritime industry healthcare history.",
      },
      {
        name: "Plymouth County",
        description: "Brockton and Plymouth anchor Plymouth County where Brockton Hospital (Steward) and Beth Israel Deaconess Hospital Plymouth serve a population spanning Brockton's urban Medicaid needs to Plymouth's affluent coastal retirement communities.",
      },
      {
        name: "Barnstable County",
        description: "Cape Cod's only county, Barnstable County's seasonal population surges to 10x its winter resident base. Cape Cod Healthcare's two hospitals serve a Medicare-heavy population with seasonal tourist-industry healthcare worker considerations.",
      },
      {
        name: "Hampden County",
        description: "Springfield, Massachusetts' third-largest city, anchors Hampden County where Baystate Medical Center serves as Western New England's major academic referral center, serving a population with significant Medicaid and Medicare enrollment from post-industrial economic transitions.",
      },
      {
        name: "Hampshire County",
        description: "Amherst and Smith College anchor Hampshire County's college-town healthcare market, where Cooley Dickinson Hospital (affiliated with Massachusetts General) serves a population blending university employment with significant Medicaid enrollment from Pioneer Valley communities.",
      },
    ],
  },
  {
    slug: "michigan",
    name: "Michigan",
    abbr: "MI",
    counties: [
      {
        name: "Wayne County",
        description: "Detroit, Michigan's largest city, anchors Wayne County with the Detroit Medical Center, Henry Ford Health System, and Beaumont Hospital Dearborn serving a payer mix from urban Medicaid populations to suburban commercial coverage from auto-industry employment.",
      },
      {
        name: "Oakland County",
        description: "Metro Detroit's affluent suburbs, Oakland County is Michigan's wealthiest county where Beaumont Health's flagship hospitals and Henry Ford's suburban expansion serve a population with strong Medicare Advantage and commercial HMO enrollment.",
      },
      {
        name: "Macomb County",
        description: "Metro Detroit's blue-collar suburban spine, Macomb County's healthcare market is shaped by auto-industry employment and a growing retiree population. Henry Ford Macomb Hospital and McLaren Macomb serve a mixed commercial and Medicare population.",
      },
      {
        name: "Kent County",
        description: "Grand Rapids, Michigan's second-largest city, anchors Kent County with Corewell Health (formerly Spectrum Health) and Mercy Health serving a payer mix from healthcare employment to significant Medicaid managed care enrollment across the county's urban-rural gradient.",
      },
      {
        name: "Genesee County",
        description: "Flint anchors Genesee County where Hurley Medical Center and McLaren Flint serve a population navigating the water crisis aftermath with significant Medicaid enrollment and complex behavioral health billing needs alongside growing Medicare coverage.",
      },
      {
        name: "Washtenaw County",
        description: "Ann Arbor and the University of Michigan anchor Washtenaw County where Michigan Medicine serves as the state's premier academic medical center, serving a payer mix from university employment to significant Medicaid enrollment from the surrounding rural catchment area.",
      },
      {
        name: "Ingham County",
        description: "Lansing, Michigan's capital, anchors Ingham County where McLaren Greater Lansing and Sparrow Health System serve a population dominated by state government employment and significant Medicare enrollment from the surrounding agricultural communities.",
      },
      {
        name: "Ottawa County",
        description: "Holland and Grand Haven anchor Ottawa County's West Michigan lakeshore communities where Holland Hospital and Noordhoff Health Spectrum Ottawa serve a population blending manufacturing employment with growing healthcare and technology sectors.",
      },
      {
        name: "Kalamazoo County",
        description: "Kalamazoo, Michigan's healthcare hub for Southwest Michigan, anchors the county where Bronson Methodist Hospital serves a population spanning Pfizer pharmaceutical employment to significant Medicaid and Medicare enrollment.",
      },
      {
        name: "Saginaw County",
        description: "Saginaw anchors Saginaw County as Mid-Michigan's healthcare center where Covenant HealthCare and Ascension St. Mary's Hospital serve a population with significant Medicare enrollment from post-industrial economic transitions and surrounding rural communities.",
      },
    ],
  },
  {
    slug: "minnesota",
    name: "Minnesota",
    abbr: "MN",
    counties: [
      {
        name: "Hennepin County",
        description: "Minneapolis, Minnesota's largest city, anchors Hennepin County with Hennepin Healthcare and North Memorial Health serving a population from downtown Minneapolis corporate employees to significant Medicaid enrollment in the urban core, all benefiting from Minnesota's robust managed care environment.",
      },
      {
        name: "Ramsey County",
        description: "St. Paul, Minnesota's capital, anchors Ramsey County where Allina Health's Regions Hospital and HealthPartners serve a population blending state government employment with significant East African and Southeast Asian immigrant communities requiring complex language-accessible billing.",
      },
      {
        name: "Dakota County",
        description: "Bloomington and the southern Twin Cities suburbs anchor Dakota County where Northfield Hospital and Allina Health's suburban clinics serve a growing population with strong commercial enrollment from corporate headquarters employment.",
      },
      {
        name: "St. Louis County",
        description: "Duluth and the Iron Range anchor St. Louis County where Essentia Health and St. Mary's Medical Center serve a Medicare-heavy population spanning the mining-industry retirement communities to significant Medicaid enrollment in the urban core.",
      },
      {
        name: "Anoka County",
        description: "The northern Twin Cities suburban ring, Anoka County is Minnesota's third-most populous where Mercy Hospital (Allina) and Unity Family Healthcare (CentraCare) serve a growing population balancing suburban commercial coverage with rural healthcare needs.",
      },
      {
        name: "Washington County",
        description: "Stillwater and the St. Croix Valley anchor Washington County where Lakeview Hospital and HealthPartners Stillwater Medical Group serve a growing affluent population with strong commercial and Medicare Advantage enrollment.",
      },
      {
        name: "Stearns County",
        description: "St. Cloud and St. John's University anchor Stearns County where CentraCare St. Cloud Hospital serves a population blending Catholic healthcare traditions with significant Medicaid managed care enrollment and growing Medicare needs.",
      },
      {
        name: "Olmsted County",
        description: "Rochester and the Mayo Clinic anchor Olmsted County where Mayo Clinic Hospital and Olmsted Medical Center serve a global referral population alongside the local community, generating exceptional complex-case billing and international patient billing workflows.",
      },
      {
        name: "Scott County",
        description: "Shakopee and Prior Lake anchor Scott County's rapid southern Twin Cities growth where St. Francis Regional Medical Center serves a young, commercially insured suburban population with low Medicaid enrollment and growing Medicare needs.",
      },
      {
        name: "Blue Earth County",
        description: "Mankato anchors Blue Earth County where Mayo Clinic Health System Mankato serves a large rural catchment area spanning southern Minnesota with significant Medicare enrollment from agricultural retirement communities.",
      },
    ],
  },
  {
    slug: "mississippi",
    name: "Mississippi",
    abbr: "MS",
    counties: [
      {
        name: "Hinds County",
        description: "Jackson, Mississippi's capital and largest city, anchors Hinds County with the University of Mississippi Medical Center serving as the state's only academic medical center, handling a disproportionate share of Mississippi's Medicaid and uninsured populations.",
      },
      {
        name: "Harrison County",
        description: "Biloxi and Gulfport anchor Harrison County's Gulf Coast healthcare market where Gulfport Memorial Hospital and Singing River Health System serve a population recovering from Hurricane Katrina with significant Medicare enrollment and growing Medicare Advantage penetration.",
      },
      {
        name: "DeSoto County",
        description: "Southaven and Olive Branch anchor DeSoto County as the Memphis metro's Mississippi suburb, where Baptist Memorial Hospital DeSoto serves a commercially insured suburban population with Memphis-based payer contracts and growing Medicare enrollment.",
      },
      {
        name: "Rankin County",
        description: "Brandon and Pearl anchor Rankin County's suburban Jackson metropolitan growth, where Rankin Medical Center and the Mississippi Baptist Medical Center expansion serve a growing commercially insured population from the Jackson metro's suburban expansion.",
      },
      {
        name: "Jackson County",
        description: "Pascagoula and Ocean Springs anchor Jackson County's Mississippi Gulf Coast, where Singing River Health System's Pascagoula Hospital serves a petrochemical refinery workforce with significant workers' compensation and commercial billing alongside Medicare needs.",
      },
      {
        name: "Madison County",
        description: "Canton and Ridgeland anchor Madison County as Mississippi's wealthiest county, where Baptist Memorial Hospital Madison and the University of Mississippi Medical Center's regional clinics serve an affluent suburban population with strong commercial coverage.",
      },
      {
        name: "Lee County",
        description: "Tupelo anchors Lee County as North Mississippi's healthcare hub, where North Mississippi Medical Center serves the largest rural geographic catchment in the state with significant Medicare and Medicaid enrollment from surrounding agricultural communities.",
      },
      {
        name: "Forrest County",
        description: "Hattiesburg and the University of Southern Mississippi anchor Forrest County where Forrest General Hospital and Merit Health Wesley serve a population spanning university employment to significant Medicare and Medicaid enrollment from the surrounding Pine Belt region.",
      },
      {
        name: "Lafayette County",
        description: "Oxford and the University of Mississippi anchor Lafayette County where Baptist Memorial Hospital North Mississippi serves an affluent university community with strong commercial coverage alongside growing Medicare enrollment from retirement migration.",
      },
      {
        name: "Washington County",
        description: "Greenville anchors Washington County as the Mississippi Delta's healthcare hub, where the Delta Regional Medical Center serves a population facing the Delta's persistent poverty with significant Medicaid enrollment and complex chronic disease management billing.",
      },
    ],
  },
  {
    slug: "missouri",
    name: "Missouri",
    abbr: "MO",
    counties: [
      {
        name: "Jackson County",
        description: "Kansas City's Missouri side and Independence anchor Jackson County where HCA Midwest Health and Saint Luke's Health System serve a population from urban Medicaid populations to affluent suburban specialty practice demand with significant Medicare enrollment.",
      },
      {
        name: "St. Louis County",
        description: "St. Louis County surrounds Missouri's largest city with BJC HealthCare's network of hospitals and SSM Health St. Mary's Hospital serving one of the nation's most managed-care-penetrated markets with complex commercial and Medicare Advantage billing.",
      },
      {
        name: "St. Charles County",
        description: "St. Charles and O'Fallon anchor St. Charles County's rapid suburban St. Louis growth where SSM Health St. Joseph Hospital Lake Saint Louis and Barnes-Jewish St. Peters Hospital serve a growing commercially insured suburban population.",
      },
      {
        name: "Greene County",
        description: "Springfield, Missouri's third-largest city, anchors Greene County where Mercy Hospital Springfield and CoxHealth serve as competing major health systems serving a population spanning Ozarks rural communities to growing Springfield suburban commercial coverage.",
      },
      {
        name: "Clay County",
        description: "Liberty and the North Kansas City suburbs anchor Clay County where HCA Research Medical Center and Liberty Hospital serve a growing suburban population with strong commercial enrollment from Kansas City corporate employment.",
      },
      {
        name: "Boone County",
        description: "Columbia and the University of Missouri anchor Boone County where MU Health Care and Boone Health serve a population blending university employment, state government adjacency, and growing suburban commercial enrollment.",
      },
      {
        name: "Jasper County",
        description: "Joplin anchors Jasper County where Mercy Hospital Joplin and Freeman Health System serve a population spanning the aftermath of the 2011 tornado disaster recovery with significant Medicare and Medicaid enrollment and rural Ozarks catchment.",
      },
      {
        name: "St. Francois County",
        description: "Farmington anchors St. Francois County where Parkland Health Center and Mineral Area Regional Medical Center serve a population spanning the St. Louis metro's Ozarks extension with significant Medicare and Medicaid enrollment from rural communities.",
      },
      {
        name: "Jefferson County",
        description: "Arnold and Festus anchor Jefferson County's suburban St. Louis southern expansion where Jefferson Healthcare and Mercy Hospital Jefferson serve a population transitioning from rural Ozarks to suburban commercial coverage.",
      },
      {
        name: "Cole County",
        description: "Jefferson City, Missouri's capital, anchors Cole County where Capital Region Medical Center and SSM Health St. Mary's Hospital Jefferson City serve a population dominated by state government employment with significant Medicare enrollment.",
      },
    ],
  },
  {
    slug: "montana",
    name: "Montana",
    abbr: "MT",
    counties: [
      {
        name: "Yellowstone County",
        description: "Billings, Montana's largest city, anchors Yellowstone County where Billings Clinic and St. Vincent Healthcare serve as the state's largest healthcare systems serving a large geographic catchment area with significant Medicare enrollment.",
      },
      {
        name: "Missoula County",
        description: "Missoula and the University of Montana anchor Missoula County where Providence St. Patrick Hospital and Community Medical Center serve a growing population of outdoor-recreation professionals and remote workers with strong commercial coverage.",
      },
      {
        name: "Gallatin County",
        description: "Bozeman and Montana State University anchor Gallatin County as Montana's fastest-growing county where Bozeman Health Deaconess Hospital serves an affluent, tech-sector and remote-worker population with strong commercial and Medicare enrollment.",
      },
      {
        name: "Flathead County",
        description: "Kalispell and Whitefish anchor Flathead County's Glacier Country healthcare market, where North Valley Hospital and Logan Health Medical Center serve a Medicare-heavy retiree population drawn by Montana's tax-friendly environment.",
      },
      {
        name: "Lewis and Clark County",
        description: "Helena, Montana's capital, anchors Lewis and Clark County where St. Peter's Health and the VA Montana Healthcare System serve a population dominated by state government and federal employment with significant Medicare enrollment.",
      },
      {
        name: "Cascade County",
        description: "Great Falls anchors Cascade County as North Central Montana's healthcare hub, where Benefis Health System and Great Falls Clinic Hospital serve a Medicare-heavy population across a large geographic rural catchment area.",
      },
      {
        name: "Lake County",
        description: "Polson and the Flathead Lake communities anchor Lake County where St. Joseph Medical Center and Polson Health serve a population spanning Flathead Indian Reservation communities with significant Indian Health Service and Medicaid billing.",
      },
      {
        name: "Lincoln County",
        description: "Libby and Troy anchor Lincoln County's Yaak and Cabinet Mountain communities where Cabinet Peaks Medical Center serves a geographically isolated Medicare-heavy population with significant timber-industry legacy health needs.",
      },
      {
        name: "Ravalli County",
        description: "Hamilton and Stevensville anchor Ravalli County's Bitterroot Valley healthcare, where Marcus Daly Memorial Hospital serves a growing retiree and remote-worker population with significant Medicare enrollment and strong commercial coverage.",
      },
      {
        name: "Big Horn County",
        description: "Hardin and Crow Agency anchor Big Horn County where Big Horn County Medical Center and Crow Tribe Health facilities serve a large Native American population with significant Indian Health Service contract health service and Medicaid billing.",
      },
    ],
  },
  {
    slug: "nebraska",
    name: "Nebraska",
    abbr: "NE",
    counties: [
      {
        name: "Douglas County",
        description: "Omaha, Nebraska's largest city, anchors Douglas County where CHI Bergan Mercy, Methodist Health System, and the University of Nebraska Medical Center serve a population spanning meatpacking-industry workers to biotech-sector employees with diverse payer profiles.",
      },
      {
        name: "Lancaster County",
        description: "Lincoln, Nebraska's capital and second-largest city, anchors Lancaster County where Bryan Medical Center and CHI St. Elizabeth serve a population dominated by state government and university employment with strong commercial coverage.",
      },
      {
        name: "Sarpy County",
        description: "Bellevue and Papillion anchor Sarpy County's rapid suburban Omaha growth where CHI Midlands and Nebraska Medicine Bellevue serve a young, commercially insured suburban population with growing Medicare enrollment.",
      },
      {
        name: "Hall County",
        description: "Grand Island anchors Hall County as Central Nebraska's healthcare hub, where CHI St. Francis and Grand Island Regional Medical Center serve a population spanning meatpacking-industry workers to significant Medicare enrollment in agricultural retirement communities.",
      },
      {
        name: "Buffalo County",
        description: "Kearney anchors Buffalo County where CHI Good Samaritan Hospital serves a large geographic catchment area spanning the Nebraska panhandle with significant Medicaid and Medicare enrollment from rural agricultural communities.",
      },
      {
        name: "Scotts Bluff County",
        description: "Scottsbluff anchors Scotts Bluff County as Western Nebraska's healthcare hub, where Regional West Medical Center serves a geographically isolated Medicare-heavy population across the Nebraska panhandle and Wyoming border.",
      },
      {
        name: "Dodge County",
        description: "Fremont anchors Dodge County where Fremont Health Medical Center serves a population spanning suburban Omaha commuter communities to significant Medicare enrollment in the surrounding agricultural communities.",
      },
      {
        name: "Madison County",
        description: "Norfolk anchors Madison County as Northeast Nebraska's healthcare hub, where Faith Regional Health Services serves a Medicare-heavy population across a dispersed rural geographic catchment area.",
      },
      {
        name: "Platte County",
        description: "Columbus anchors Platte County where Columbus Community Hospital serves a growing population with significant Medicaid and Medicare enrollment spanning the central Platte River Valley agricultural communities.",
      },
      {
        name: "Adams County",
        description: "Hastings anchors Adams County where Mary Lanning Healthcare Morrison Cancer Center serves a predominantly Medicare population across the South Central Nebraska agricultural communities with significant rural health clinic presence.",
      },
    ],
  },
  {
    slug: "nevada",
    name: "Nevada",
    abbr: "NV",
    counties: [
      {
        name: "Clark County",
        description: "Las Vegas and Henderson anchor Clark County, Nevada's population center where Valley Health System, Sunrise Health System, and the University Medical Center serve a tourist-industry workforce and growing retiree population with high Medicare Advantage penetration.",
      },
      {
        name: "Washoe County",
        description: "Reno and Sparks anchor Washoe County where Renown Health and Northern Nevada Medical Center serve a population spanning the Northern Nevada tech-spillover from California's Silicon Valley with strong commercial and Medicare enrollment.",
      },
      {
        name: "Lyon County",
        description: "Yerington and Fernley anchor Lyon County where South Lyon Medical Center serves a rural population with significant Medicare enrollment and growing suburban-spillover from the Reno-Sparks metropolitan growth.",
      },
      {
        name: "Elko County",
        description: "Elko's gold mining economy anchors Elko County where Northeastern Nevada Regional Hospital serves a population dominated by mining-industry workers with strong workers' compensation and commercial billing alongside significant Medicare enrollment.",
      },
      {
        name: "Nye County",
        description: "Pahrump and Tonopah anchor Nye County's vast rural geography where Desert View Hospital and Nye Regional Medical Center serve a geographically isolated Medicare-heavy population with significant telehealth billing needs.",
      },
      {
        name: "Carson City",
        description: "Nevada's capital, Carson City is both a city and county where Carson Tahoe Regional Healthcare serves a population blending state government employment with growing suburban retirement communities.",
      },
      {
        name: "Douglas County",
        description: "Minden and Gardnerville anchor Douglas County's Nevada side of Lake Tahoe where Barton Health serves a growing affluent retirement community with strong Medicare Advantage and commercial enrollment from the Lake Tahoe tourism economy.",
      },
      {
        name: "White Pine County",
        description: "Ely anchors White Pine County where William Bee Ririe Hospital serves a geographically isolated population with significant Medicare enrollment spanning Nevada's Great Basin National Park region.",
      },
      {
        name: "Churchill County",
        description: "Fallon anchors Churchill County where Banner Churchill Community Hospital serves a population spanning Naval Air Station Fallon military affiliation with TRICARE billing alongside agricultural community healthcare needs.",
      },
      {
        name: "Humboldt County",
        description: "Winnemucca anchors Humboldt County's rural gold mining economy where Humboldt General Hospital serves a small population with significant commercial mining insurance and workers' compensation billing alongside growing Medicare enrollment.",
      },
    ],
  },
  {
    slug: "new-hampshire",
    name: "New Hampshire",
    abbr: "NH",
    counties: [
      {
        name: "Hillsborough County",
        description: "Manchester, New Hampshire's largest city, and Nashua anchor Hillsborough County where Elliot Health System and Southern New Hampshire Medical Center serve a population spanning Boston commuter communities to significant Medicaid managed care enrollment.",
      },
      {
        name: "Rockingham County",
        description: "Portsmouth and Salem anchor Rockingham County where Portsmouth Regional Hospital and Exeter Hospital serve an affluent coastal population with strong commercial enrollment from Boston metro commuter and tech-sector employment.",
      },
      {
        name: "Merrimack County",
        description: "Concord, New Hampshire's capital, anchors Merrimack County where Concord Hospital and Catholic Medical Center serve a population dominated by state government employment with significant Medicare and Medicaid managed care enrollment.",
      },
      {
        name: "Grafton County",
        description: "Lebanon and the Dartmouth College affiliation anchor Grafton County where Dartmouth-Hitchcock Medical Center serves as New Hampshire's second academic medical center, serving a geographically dispersed rural population with significant Medicare enrollment.",
      },
      {
        name: "Strafford County",
        description: "Dover and Rochester anchor Strafford County where Frisbie Memorial Hospital and Wentworth-Douglass Hospital (affiliated with Dartmouth-Hitchcock) serve a growing suburban population with strong commercial and Medicare enrollment.",
      },
      {
        name: "Cheshire County",
        description: "Keene and the Keene State College community anchor Cheshire County where Cheshire Medical Center/Dartmouth-Hitchcock serves a predominantly Medicare population in New Hampshire's southwestern rural communities.",
      },
      {
        name: "Sullivan County",
        description: "Claremont and Newport anchor Sullivan County where New London Hospital and Valley Regional Hospital serve a rural population with significant Medicare and Medicaid enrollment in New Hampshire's smallest and most rural county.",
      },
      {
        name: "Coos County",
        description: "North Conway and Berlin anchor Coos County where Androscoggin Valley Hospital and Upper Connecticut Valley Hospital serve a geographically isolated Medicare-heavy population in New Hampshire's northernmost rural communities.",
      },
      {
        name: "Belknap County",
        description: "Laconia and the Lakes Region anchor Belknap County where Lakes Region General Hospital serves a Medicare-heavy retiree population drawn by New Hampshire's tax-friendly environment for seniors and the recreational amenities of Lake Winnipesaukee.",
      },
      {
        name: "Carroll County",
        description: "Wolfeboro and Wolfeboro Falls anchor Carroll County's healthcare market serving a growing retiree population with significant Medicare enrollment in New Hampshire's most elderly rural county.",
      },
    ],
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    abbr: "NJ",
    counties: [
      {
        name: "Bergen County",
        description: "New Jersey's wealthiest and most populous county, Bergen's suburbs anchor New Jersey's healthcare market where Hackensack University Medical Center and Englewood Health serve an affluent population with strong Medicare Advantage and commercial HMO penetration.",
      },
      {
        name: "Middlesex County",
        description: "Edison and New Brunswick anchor Middlesex County where Robert Wood Johnson University Hospital and Saint Peter's University Hospital serve a population spanning pharmaceutical industry employment to significant Medicaid enrollment.",
      },
      {
        name: "Essex County",
        description: "Newark, New Jersey's largest city, anchors Essex County where Newark Beth Israel Medical Center and Saint Michael's Medical Center serve an urban Medicaid-heavy population alongside significant commercial coverage in the suburban northern communities.",
      },
      {
        name: "Monmouth County",
        description: "Jersey Shore suburbs from Asbury Park to Red Bank anchor Monmouth County where Monmouth Medical Center and Riverview Medical Center serve a Medicare-heavy retiree population with strong Medicare Advantage enrollment.",
      },
      {
        name: "Ocean County",
        description: "New Jersey's fastest-growing county, Ocean County's Jersey Shore retirement communities generate the state's highest Medicare billing volume. Community Medical Center and Ocean Medical Center serve a predominantly senior population.",
      },
      {
        name: "Union County",
        description: "Elizabeth and Summit anchor Union County where Trinitas Regional Medical Center and Overlook Medical Center serve a diverse immigrant population with significant Medicaid managed care enrollment alongside commercial coverage from pharmaceutical employment.",
      },
      {
        name: "Hudson County",
        description: "Jersey City and Hoboken anchor Hudson County's waterfront transformation, where CarePoint Health and Jersey City Medical Center serve a young professional population with strong commercial enrollment alongside significant Medicaid needs.",
      },
      {
        name: "Camden County",
        description: "Cherry Hill and Camden City anchor Camden County where Cooper University Health Care and Virtua Our Lady of Lourdes Hospital serve a payer mix from Camden City's Medicaid safety-net to Cherry Hill's affluent suburban commercial coverage.",
      },
      {
        name: "Morris County",
        description: "Morristown and Parsippany anchor Morris County where Morristown Medical Center and Atlantic Health System serve an affluent suburban population with strong commercial and Medicare Advantage enrollment from pharmaceutical and financial services employment.",
      },
      {
        name: "Passaic County",
        description: "Paterson and Wayne anchor Passaic County where St. Joseph's University Medical Center and Chilton Medical Center serve a diverse population from Paterson's significant Medicaid enrollment to Wayne's affluent suburban Medicare population.",
      },
    ],
  },
  {
    slug: "new-mexico",
    name: "New Mexico",
    abbr: "NM",
    counties: [
      {
        name: "Bernalillo County",
        description: "Albuquerque, New Mexico's largest city, anchors Bernalillo County where UNM Health Sciences Center and Presbyterian Healthcare Services serve a payer mix from urban Medicaid populations to growing Medicare enrollment, all navigating the state's large Native American population.",
      },
      {
        name: "Santa Fe County",
        description: "Santa Fe, New Mexico's capital, anchors Santa Fe County where Christus St. Vincent Regional Medical Center and the Santa Fe Indian Hospital serve a population blending wealthy art-world retirees with significant Medicaid-enrolled Native American communities.",
      },
      {
        name: "Dona Ana County",
        description: "Las Cruces anchors Doña Ana County as New Mexico's second-largest county where MountainView Regional Medical Center and Memorial Medical Center serve a border-region population with significant Medicaid and Univision community health needs.",
      },
      {
        name: "Sandoval County",
        description: "Rio Rancho and the Sandia Pueblo border anchor Sandoval County where Presbyterian Ruskin Medical Center serves a growing suburban population with Medicare enrollment alongside significant Indian Health Service coordination for tribal communities.",
      },
      {
        name: "San Juan County",
        description: "Farmington anchors San Juan County as the Four Corners healthcare hub where San Juan Regional Medical Center serves a large Navajo Nation population with significant Indian Health Service and Medicaid billing alongside growing Medicare needs.",
      },
      {
        name: "Valencia County",
        description: "Los Lunas anchors Valencia County where Lovelace Regional Hospital serves a population spanning Albuquerque's southern suburban expansion to significant rural agricultural communities with mixed Medicare and Medicaid enrollment.",
      },
      {
        name: "McKinley County",
        description: "Gallup anchors McKinley County's Navajo Nation and Zuni Pueblo healthcare market where Gallup Indian Medical Center and Rehoboth McKinley Christian Hospital serve a predominantly Native American population with significant Indian Health Service billing.",
      },
      {
        name: "Lea County",
        description: "Hobbs anchors Lea County's Permian Basin oil boom where Lea Regional Medical Center and Nor-Lea Hospital serve a population with strong workers' compensation and commercial billing from the oil and gas industry alongside significant Medicaid enrollment.",
      },
      {
        name: "Otero County",
        description: "Alamogordo and White Sands anchor Otero County where Gerald Champion Regional Medical Center serves a military-affiliated population near Holloman Air Force Base with significant TRICARE billing alongside growing civilian Medicare needs.",
      },
      {
        name: "San Miguel County",
        description: "Las Vegas, NM anchors San Miguel County where Alta Vista Regional Medical Center serves a predominantly Medicare population in New Mexico's northeastern rural communities with limited specialist access and significant telehealth billing.",
      },
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    abbr: "NY",
    counties: [
      {
        name: "New York County (Manhattan)",
        description: "Manhattan anchors New York State's healthcare market with NewYork-Presbyterian, Mount Sinai, and NYU Langone serving a payer mix from global elite commercial patients to significant Medicaid enrollment in the borough's diverse neighborhoods.",
      },
      {
        name: "Kings County (Brooklyn)",
        description: "Brooklyn, New York City's most populous borough, anchors Kings County where NYU Langone Brooklyn, Maimonides Medical Center, and Interfaith Medical Center serve a diverse immigrant population with the city's highest Medicaid enrollment and complex multilingual billing needs.",
      },
      {
        name: "Queens County",
        description: "Queens, America's most ethnically diverse county, anchors its healthcare market where NewYork-Presbyterian Queens, NYC Health + Hospitals/Queens, and St. John's Episcopal Hospital serve over 100 language communities with extraordinary Medicaid and Medicare managed care enrollment.",
      },
      {
        name: "Bronx County",
        description: "The Bronx anchors Bronx County where Montefiore Medical Center and NYC Health + Hospitals/Jacobi serve New York City's highest Medicaid enrollment and the most economically disadvantaged populations, alongside a significant Medicare population.",
      },
      {
        name: "Suffolk County",
        description: "Long Island's eastern county, Suffolk County is served by Stony Brook University Hospital and Northwell Health's eastern network serving a Medicare-heavy retiree population from the Hamptons to the Pine Barrens with significant Medicare Advantage enrollment.",
      },
      {
        name: "Nassau County",
        description: "Long Island's northern county, Nassau County serves as one of New York's wealthiest suburban markets where Northwell Health's central hospitals and NYU Langone's Long Island expansion serve an affluent commercially insured population.",
      },
      {
        name: "Westchester County",
        description: "The Bronx's northern neighbor, Westchester County's affluent suburban communities from Bronxville to White Plains anchor New York's largest suburban healthcare market where Westchester Medical Center and CareMount Medical serve strong commercial and Medicare Advantage enrollment.",
      },
      {
        name: "Erie County",
        description: "Buffalo, New York's second-largest city, anchors Erie County where Kaleida Health and Catholic Health System serve a population spanning post-industrial urban Medicaid needs to affluent Northtown suburban commercial coverage.",
      },
      {
        name: "Monroe County",
        description: "Rochester, New York's third-largest city, anchors Monroe County where the University of Rochester Medical Center serves a payer mix from university employment to significant Medicaid managed care enrollment, all navigating New York's complex managed care regulations.",
      },
      {
        name: "Onondaga County",
        description: "Syracuse anchors Onondaga County where SUNY Upstate Medical University and St. Joseph's Health serve a population spanning post-industrial urban Medicaid to significant Medicare enrollment from the surrounding rural Central New York communities.",
      },
    ],
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbr: "NC",
    counties: [
      {
        name: "Mecklenburg County",
        description: "Charlotte, North Carolina's largest city, anchors Mecklenburg County where Atrium Health's Carolinas Medical Center and Novant Health's Presbyterian Medical Center serve a population spanning Fortune 500 corporate employment to significant Medicaid managed care enrollment.",
      },
      {
        name: "Wake County",
        description: "Raleigh, North Carolina's capital, anchors Wake County where Duke Health's Raleigh hospitals and UNC Health Rex serve a population dominated by state government and technology-sector employment with strong commercial coverage and growing Medicare enrollment.",
      },
      {
        name: "Guilford County",
        description: "Greensboro and High Point anchor Guilford County where Cone Health and Novant Health Elm Run serve a population spanning post-industrial urban Medicaid to the High Point furniture-industry workforce with significant Medicare enrollment.",
      },
      {
        name: "Durham County",
        description: "Durham and Research Triangle Park anchor Durham County where Duke University Hospital serves as North Carolina's premier academic medical center, serving a population from biotech-sector employment to significant Medicaid enrollment from the surrounding rural catchment.",
      },
      {
        name: "Forsyth County",
        description: "Winston-Salem, North Carolina's second-largest city, anchors Forsyth County where Novant Health Forsyth Medical Center and Atrium Health Wake Forest Baptist serve a population from Wake Forest Baptist's academic mission to significant Medicare enrollment.",
      },
      {
        name: "Cumberland County",
        description: "Fayetteville and Fort Liberty nearby anchor Cumberland County where Cape Fear Valley Medical Center serves a military-affiliated population with significant TRICARE billing alongside a growing civilian population navigating North Carolina's Medicaid expansion.",
      },
      {
        name: "Buncombe County",
        description: "Asheville and the Blue Ridge Mountains anchor Buncombe County where Mission Health (HCA) and AdventHealth Hendersonville serve a Medicare-heavy retiree destination market with significant commercial Medicare Advantage enrollment.",
      },
      {
        name: "New Hanover County",
        description: "Wilmington anchors New Hanover County where Novant Health New Hanover Regional Medical Center serves a growing coastal retiree population with significant Medicare enrollment alongside the Cape Fear region's growing commercial enrollment.",
      },
      {
        name: "Gaston County",
        description: "Gastonia and Belmont anchor Gaston County where CaroMont Regional Medical Center serves a population spanning post-industrial manufacturing workers with significant Medicare enrollment to growing suburban commuter communities.",
      },
      {
        name: "Union County",
        description: "Monroe and Waxhaw anchor Union County's explosive suburban Charlotte growth where Atrium Health Union and Union County's community clinics serve a young, commercially insured suburban population with low Medicaid enrollment.",
      },
    ],
  },
  {
    slug: "north-dakota",
    name: "North Dakota",
    abbr: "ND",
    counties: [
      {
        name: "Cass County",
        description: "Fargo, North Dakota's largest city, anchors Cass County where Sanford Health Fargo and Essentia Health West serve a population from the Red River Valley agricultural economy to significant tech-sector growth with strong commercial coverage.",
      },
      {
        name: "Burleigh County",
        description: "Bismarck, North Dakota's capital, anchors Burleigh County where Sanford Bismarck and CHI St. Alexius Health serve a population dominated by state government employment with significant Medicare enrollment from the surrounding agricultural communities.",
      },
      {
        name: "Grand Forks County",
        description: "Grand Forks and the University of North Dakota anchor Grand Forks County where Altru Health System serves a population spanning university employment to significant Medicaid enrollment with a large geographic rural catchment area.",
      },
      {
        name: "Ward County",
        description: "Minot anchors Ward County where Trinity Health serves a population spanning the Bakken oil boom's healthcare demands to significant Medicare enrollment from the surrounding agricultural communities in North Dakota's north central region.",
      },
      {
        name: "Williams County",
        description: "Williston and the Bakken oil fields anchor Williams County where CHI St. Joseph's Health and Mercy Health Williston serve a population with strong workers' compensation and commercial billing from the oil and gas industry alongside significant Medicaid enrollment.",
      },
      {
        name: "Morton County",
        description: "Mandan anchors Morton County where Sanford Health Bismarck's southern affiliates serve a population blending Bismarck suburban expansion with significant Medicare enrollment from the surrounding agricultural communities.",
      },
      {
        name: "Stutsman County",
        description: "Jamestown anchors Stutsman County where Essentia Health Jamestown serves a predominantly Medicare population across a large rural catchment area with significant Stutsman County Correctional Facility healthcare needs.",
      },
      {
        name: "Richland County",
        description: "Wahpeton anchors Richland County where Essentia Health St. Francis serves a small rural population with significant Medicare and Medicaid enrollment spanning the Red River Valley's agricultural communities.",
      },
      {
        name: "Rolette County",
        description: "Belcourt and the Turtle Mountain Band of Chippewa Indians Reservation anchor Rolette County where Quentin N. Burdick Indian Medical Center and Standing Rock Indian Health Service facilities serve a predominantly Native American population.",
      },
      {
        name: "Mountrail County",
        description: "Stanley and the Bakken's second wave anchor Mountrail County where Mountrail County Medical Center serves a population with significant commercial oil and gas industry coverage alongside growing Medicaid enrollment in North Dakota's most remote oil county.",
      },
    ],
  },
  {
    slug: "ohio",
    name: "Ohio",
    abbr: "OH",
    counties: [
      {
        name: "Cuyahoga County",
        description: "Cleveland, Ohio's largest city, anchors Cuyahoga County where Cleveland Clinic, University Hospitals, and MetroHealth serve a payer mix from global specialty referral patients to significant Medicaid enrollment in Cleveland's urban core.",
      },
      {
        name: "Franklin County",
        description: "Columbus, Ohio's capital and largest city, anchors Franklin County where OhioHealth and Mount Carmel Health System serve a population spanning state government employment, healthcare industry, and significant Medicaid managed care enrollment.",
      },
      {
        name: "Hamilton County",
        description: "Cincinnati anchors Hamilton County where TriHealth and UC Health serve a population from the city's urban Medicaid populations to affluent suburban specialty practice demand with significant Medicare enrollment in the city's aging neighborhoods.",
      },
      {
        name: "Montgomery County",
        description: "Dayton anchors Montgomery County where Premier Health and Dayton Children's Hospital serve a population spanning Wright-Patterson Air Force Base military affiliation to significant Medicare enrollment from post-industrial economic transitions.",
      },
      {
        name: "Summit County",
        description: "Akron anchors Summit County where Cleveland Clinic Akron General and Summa Health serve a population from the city's urban Medicaid needs to significant Medicare enrollment in the surrounding Akron suburbs.",
      },
      {
        name: "Lucas County",
        description: "Toledo, Ohio's fourth-largest city, anchors Lucas County where ProMedica Health System and Mercy Health Toledo serve a population spanning the auto-industry supply chain workforce to significant Medicaid and Medicare enrollment in northwest Ohio.",
      },
      {
        name: "Butler County",
        description: "Hamilton and Middletown anchor Butler County where Fort Hamilton Hospital (Cincinnati Children's affiliate) and UC Health serve a population spanning the auto-industry suburban growth between Cincinnati and Dayton with strong commercial enrollment.",
      },
      {
        name: "Stark County",
        description: "Canton anchors Stark County where Aultman Health Foundation and Mercy Medical Center Canton serve a population from the city's urban Medicaid needs to significant Medicare enrollment in the surrounding Appalachian-margin communities.",
      },
      {
        name: "Lucas County",
        description: "Youngstown and Warren anchor Mahoning County where Mercy Health Youngstown and Steward North Hills Medical Center serve a population navigating post-steel-mill economic recovery with significant Medicare and Medicaid enrollment.",
      },
      {
        name: "Clermont County",
        description: "Milford and Batavia anchor Clermont County's suburban Cincinnati growth where Mercy Health Clermont serves a growing commercially insured suburban population with significant Medicare enrollment from the East Side retirement communities.",
      },
    ],
  },
  {
    slug: "oklahoma",
    name: "Oklahoma",
    abbr: "OK",
    counties: [
      {
        name: "Oklahoma County",
        description: "Oklahoma City, Oklahoma's capital and largest city, anchors Oklahoma County where OU Health and INTEGRIS Health serve a population spanning state government employment to significant Medicaid managed care enrollment, all navigating Oklahoma's unique tribal healthcare agreements.",
      },
      {
        name: "Tulsa County",
        description: "Tulsa, Oklahoma's second-largest city, anchors Tulsa County where St. John Health System and Ascension St. John Medical Center serve a population from oil-industry commercial coverage to significant Medicare and Medicaid enrollment, with growing Native American healthcare needs.",
      },
      {
        name: "Cleveland County",
        description: "Norman and Moore anchor Cleveland County where Norman Regional Health System serves a population spanning University of Oklahoma employment to significant Medicare enrollment from the growing Oklahoma City metro southern suburban communities.",
      },
      {
        name: "Comanche County",
        description: "Lawton and Fort Sill nearby anchor Comanche County where Comanche County Memorial Hospital and USP Lawton serve a military-affiliated population with significant TRICARE billing alongside a growing civilian population.",
      },
      {
        name: "Canadian County",
        description: "Yukon and El Reno anchor Canadian County's rapid Oklahoma City suburban growth where El Reno's community hospital serves a young, commercially insured suburban population with low Medicaid enrollment.",
      },
      {
        name: "Muskogee County",
        description: "Muskogee anchors Muskogee County as Eastern Oklahoma's healthcare hub where Muskogee Medical Center and the Eastern Oklahoma VA Health Care System serve a population with significant VA and Medicare enrollment.",
      },
      {
        name: "Rogers County",
        description: "Claremore and Catoosa anchor Rogers County where Claremore Indian Hospital (Indian Health Service) and St. John Owasso nearby serve a population with significant Native American healthcare needs alongside growing suburban Tulsa commuter communities.",
      },
      {
        name: "Pottawatomie County",
        description: "Shawnee and Tecumseh anchor Pottawatomie County where St. Anthony Shawnee Hospital and Unity Health Center serve a population with significant Medicare enrollment alongside growing commercial enrollment from Oklahoma City's metro expansion.",
      },
      {
        name: "Wagoner County",
        description: "Coweta and Wagoner anchor Wagoner County where Wagoner Community Hospital serves a rural population with significant Medicare and Medicaid enrollment in the Arkansas River corridor between Tulsa and Muskogee.",
      },
      {
        name: "Cherokee County",
        description: "Tahlequah and Northeastern State University anchor Cherokee County where Cherokee Nation's WW Hastings Hospital serves a predominantly Cherokee Nation tribal population with Indian Health Service contract health service billing.",
      },
    ],
  },
  {
    slug: "oregon",
    name: "Oregon",
    abbr: "OR",
    counties: [
      {
        name: "Multnomah County",
        description: "Portland, Oregon's largest city, anchors Multnomah County where Oregon Health & Science University Hospital and Legacy Health serve a population from Portland's homeless healthcare crisis to affluent suburban specialty practice demand, navigating Oregon's pioneering Medicaid coordinated care model.",
      },
      {
        name: "Washington County",
        description: "Beaverton and Hillsboro anchor Washington County's tech-sector and Nike's home base where Providence Health & Services and Tuality Healthcare serve a commercially insured population with Oregon's highest managed care penetration.",
      },
      {
        name: "Clackamas County",
        description: "Lake Oswego and Oregon City anchor Clackamas County where Providence Willamette Falls Medical Center and Kaiser Permanente Westside serve an affluent suburban Portland population with strong commercial and Medicare Advantage enrollment.",
      },
      {
        name: "Lane County",
        description: "Eugene and Springfield anchor Lane County where PeaceHealth Oregon and McKenzie-Willamette Medical Center serve a population spanning University of Oregon employment to significant Medicare and Medicaid enrollment in Oregon's largest rural catchment.",
      },
      {
        name: "Marion County",
        description: "Salem, Oregon's capital, anchors Marion County where Salem Health and Legacy Silverton serve a population dominated by state government employment and significant Medicaid managed care enrollment from Oregon's agricultural communities.",
      },
      {
        name: "Jackson County",
        description: "Medford anchors Jackson County where Asante Three Rivers Medical Center and Providence Medford Medical Center serve a population spanning Oregon's southern wine country retirement communities to significant Medicare enrollment.",
      },
      {
        name: "Deschutes County",
        description: "Bend and Redmond anchor Deschutes County where St. Charles Health System serves a growing affluent retiree population with significant Medicare enrollment in Oregon's high desert recreation destination communities.",
      },
      {
        name: "Klamath County",
        description: "Klamath Falls anchors Klamath County where Sky Lakes Medical Center serves a geographically isolated Medicare-heavy population spanning the Klamath Basin agricultural communities and the Modoc, Klamath, and Yahooskin tribal healthcare needs.",
      },
      {
        name: "Josephine County",
        description: "Grants Pass anchors Josephine County where Asante Three Rivers Medical Center serves a rural Medicare-heavy population with significant behavioral health billing needs in Oregon's most medically underserved county.",
      },
      {
        name: "Umatilla County",
        description: "Pendleton and Hermiston anchor Umatilla County where Good Shepherd Health Care System and St. Anthony Hospital serve a population spanning the Confederated Tribes of the Umatilla Indian Reservation to significant agricultural Medicaid enrollment.",
      },
    ],
  },
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    abbr: "PA",
    counties: [
      {
        name: "Philadelphia County",
        description: "Philadelphia, Pennsylvania's largest city, anchors the state's healthcare market with Penn Medicine and Temple University Health System serving a payer mix from Philadelphia's significant Medicaid populations to world-renowned specialty referral demand.",
      },
      {
        name: "Allegheny County",
        description: "Pittsburgh, Pennsylvania's second-largest city, anchors Allegheny County where UPMC and Allegheny Health Network serve a population from Pittsburgh's urban Medicaid needs to affluent suburban specialty practice demand, all navigating Pennsylvania's complex managed care environment.",
      },
      {
        name: "Montgomery County",
        description: "King of Prussia and Norristown anchor Montgomery County where Jefferson Health Abington and Main Line Health serve an affluent suburban population with strong commercial and Medicare Advantage enrollment in Pennsylvania's wealthiest county.",
      },
      {
        name: "Bucks County",
        description: "Doylestown and Bensalem anchor Bucks County where Doylestown Health and Jefferson Health Torresdale serve a Medicare-heavy retiree population with strong Medicare Advantage enrollment between Philadelphia and New Jersey.",
      },
      {
        name: "Lancaster County",
        description: "Lancaster and Amish Country anchor Lancaster County where Penn Medicine Lancaster General Health serves a unique population from Pennsylvania Dutch Country communities with significant Medicaid enrollment to growing suburban commercial coverage.",
      },
      {
        name: "Delaware County",
        description: "Chester and Upper Darby anchor Delaware County where Crozer-Chester Medical Center and Penn Medicine Springfield serve a population from urban Medicaid needs to significant Medicare enrollment in the Philadelphia suburban ring.",
      },
      {
        name: "Lehigh County",
        description: "Allentown, Pennsylvania's third-largest city, anchors Lehigh County where Lehigh Valley Health Network serves the largest urban concentration in the Lehigh Valley with significant Medicaid and Medicare managed care enrollment.",
      },
      {
        name: "Northampton County",
        description: "Bethlehem and Easton anchor Northampton County where St. Luke's University Health Network serves a population spanning the Lehigh Valley's growing suburban commercial coverage to significant Medicare enrollment from the Delaware River retirement communities.",
      },
      {
        name: "York County",
        description: "York anchors York County where WellSpan Health and UPMC Pinnacle serve a population spanning Pennsylvania Dutch Country agricultural communities to growing suburban commercial enrollment between Baltimore and Harrisburg.",
      },
      {
        name: "Dauphin County",
        description: "Harrisburg, Pennsylvania's capital, anchors Dauphin County where Penn State Health Milton Hershey Medical Center and UPMC Pinnacle Harrisburg serve a population dominated by state government employment and significant Medicare enrollment.",
      },
    ],
  },
  {
    slug: "rhode-island",
    name: "Rhode Island",
    abbr: "RI",
    counties: [
      {
        name: "Providence County",
        description: "Providence, Rhode Island's capital and largest city, anchors Providence County where Rhode Island Hospital, The Miriam Hospital, and Care New England serve a payer mix from the state's largest Medicaid enrollment to significant Medicare managed care populations.",
      },
      {
        name: "Kent County",
        description: "Warwick and Cranston anchor Kent County where Care New England's Women & Infants Hospital and Kent County Memorial Hospital serve a population with strong Medicare Advantage enrollment in Rhode Island's most suburban county.",
      },
      {
        name: "Washington County",
        description: "South Kingstown and Narragansett anchor Washington County where South County Health System serves a Medicare-heavy retiree population in Rhode Island's coastal southern communities with strong Medicare Advantage penetration.",
      },
      {
        name: "Newport County",
        description: "Newport and Narragansett anchor Newport County where Newport Hospital (Lifespan) and the Naval Health Clinic New England serve a military-affiliated population with significant TRICARE billing alongside a wealthy retiree population.",
      },
      {
        name: "Bristol County",
        description: "Bristol and Warren anchor Rhode Island's smallest county where the Bristol County Hospital serves a small population with significant Medicare enrollment in a geographically compact area where Rhode Island Hospital handles most specialty referrals.",
      },
    ],
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    abbr: "SC",
    counties: [
      {
        name: "Greenville County",
        description: "Greenville, South Carolina's largest city, anchors the Upstate with Prisma Health and Bon Secours St. Francis serving a population from automotive manufacturing employment to significant Medicare enrollment in one of the nation's fastest-growing metros.",
      },
      {
        name: "Charleston County",
        description: "Charleston, South Carolina's historic coastal capital, anchors Charleston County where MUSC Health and Roper St. Francis Healthcare serve a population from historic downtown Medicaid needs to significant Medicare enrollment in the growing coastal retirement communities.",
      },
      {
        name: "Richland County",
        description: "Columbia, South Carolina's capital, anchors Richland County where Prisma Health Richland and Lexington Medical Center serve a population dominated by state government employment with significant Medicaid managed care enrollment.",
      },
      {
        name: "Horry County",
        description: "Myrtle Beach and Conway anchor Horry County's coastal retirement and tourism economy, where Grand Strand Health and Conway Medical Center serve the state's highest Medicare billing volume from the Myrtle Beach metro's retiree population.",
      },
      {
        name: "Spartanburg County",
        description: "Spartanburg anchors Spartanburg County where Spartanburg Medical Center and Pelham Medical Center (Prisma Health) serve a population from BMW and Michelin manufacturing employment to significant Medicare enrollment.",
      },
      {
        name: "Lexington County",
        description: "Lexington and Irmo anchor Lexington County where Lexington Medical Center serves a growing suburban population with strong commercial enrollment as the Columbia metro's fastest-growing suburban county.",
      },
      {
        name: "York County",
        description: "Rock Hill and Fort Mill anchor York County's Charlotte metro suburban growth where Atrium Health's York County hospitals and Solis Mammography serve a young, commercially insured suburban population.",
      },
      {
        name: "Beaufort County",
        description: "Hilton Head and Beaufort anchor Beaufort County's coastal retirement economy, where Beaufort County Memorial Hospital and Coastal Carolina Hospital (Tenet) serve a Medicare-heavy population in South Carolina's most affluent county.",
      },
      {
        name: "Anderson County",
        description: "Anderson anchors Anderson County as the Upstate's second healthcare hub where AnMed Health serves a population from Clemson University employment to significant Medicare enrollment in the Piedmont region's agricultural communities.",
      },
      {
        name: "Berkeley County",
        description: "Mount Pleasant and Goose Creek anchor Berkeley County's Charleston metro suburban expansion where Trident Health System and Fetter Health Care Network serve a growing military-affiliated and suburban population.",
      },
    ],
  },
  {
    slug: "south-dakota",
    name: "South Dakota",
    abbr: "SD",
    counties: [
      {
        name: "Minnehaha County",
        description: "Sioux Falls, South Dakota's largest city, anchors Minnehaha County where Sanford Health's flagship and Avera McKennan Hospital serve a population from corporate health plans (banks, agribusiness) to significant Medicaid managed care enrollment.",
      },
      {
        name: "Pennington County",
        description: "Rapid City anchors Pennington County where Monument Health Rapid City Hospital and the VA Black Hills Health Care System serve a population spanning Rapid City's growing tech-sector to significant Medicare enrollment from Black Hills retirement communities.",
      },
      {
        name: "Lincoln County",
        description: "Tea and Harrisburg anchor Lincoln County's rapid Sioux Falls suburban growth where Sanford Health's southern affiliates serve a young, commercially insured suburban population with low Medicaid enrollment.",
      },
      {
        name: "Brown County",
        description: "Aberdeen anchors Brown County where Sanford Aberdeen Medical Center serves a geographically isolated Medicare-heavy population in northeastern South Dakota's agricultural heartland.",
      },
      {
        name: "Brookings County",
        description: "Brookings and South Dakota State University anchor Brookings County where Brookings Health System serves a population dominated by university employment with strong commercial coverage and growing Medicare enrollment.",
      },
      {
        name: "Codington County",
        description: "Watertown anchors Codington County where Prairie Lakes Healthcare System serves a Medicare-heavy population across the northeastern South Dakota agricultural communities with significant rural health clinic presence.",
      },
      {
        name: "Meade County",
        description: "Sturgis and Ellsworth Air Force Base anchor Meade County where Regional Health Sturgis Hospital serves a military-affiliated population with significant TRICARE billing alongside growing civilian Medicare needs.",
      },
      {
        name: "Lawrence County",
        description: "Deadwood and Spearfish anchor Lawrence County where Spearfish Regional Hospital (Regional Health) serves an affluent Medicare-heavy retiree population in the Black Hills tourist and retirement economy.",
      },
      {
        name: "Union County",
        description: "North Sioux City and Dakota Dunes anchor Union County where Dunes Surgical Hospital and the Avera Heart Hospital of South Dakota serve a population spanning Sioux City metro suburban growth with strong commercial enrollment.",
      },
      {
        name: "Shannon County",
        description: "Pine Ridge and the Oglala Sioux Tribe anchor Shannon County where the Indian Health Service Pine Ridge Hospital serves a predominantly Native American population with Indian Health Service contract health service billing in the most rural county in the United States.",
      },
    ],
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    abbr: "TN",
    counties: [
      {
        name: "Shelby County",
        description: "Memphis, Tennessee's largest city, anchors Shelby County where Methodist Le Bonheur Healthcare and Baptist Memorial Health Care serve a payer mix from Memphis's significant Medicaid and uninsurance rates to growing Medicare Advantage penetration.",
      },
      {
        name: "Davidson County",
        description: "Nashville, Tennessee's capital and healthcare headquarters, anchors Davidson County where Vanderbilt University Medical Center and HCA TriStar Health serve a population from state government employment to significant commercial coverage from the healthcare and music industries.",
      },
      {
        name: "Knox County",
        description: "Knoxville anchors East Tennessee's healthcare hub where Covenant Health and University of Tennessee Medical Center serve a population from Oak Ridge national laboratory employment to significant Medicare enrollment.",
      },
      {
        name: "Hamilton County",
        description: "Chattanooga anchors Hamilton County where CHI Memorial Hospital and Erlanger Health System serve a population spanning the Tennessee River retiree communities to significant Medicare enrollment in the Scenic City's growing suburban communities.",
      },
      {
        name: "Sullivan County",
        description: "Bristol and Kingsport anchor Sullivan County where Ballad Health's Holston Valley Medical Center serves a population from Appalachian rural communities with significant Medicare enrollment in one of Tennessee's most medically underserved regions.",
      },
      {
        name: "Madison County",
        description: "Jackson anchors Madison County where West Tennessee Healthcare Jackson Madison County General Hospital serves a population spanning from the surrounding rural agricultural communities to significant Medicare enrollment in the Jackson metro.",
      },
      {
        name: "Sumner County",
        description: "Hendersonville and Gallatin anchor Sumner County where Sumner Regional Medical Center (Ballad Health) serves a growing Medicare-heavy retiree population north of Nashville with strong Medicare Advantage enrollment.",
      },
      {
        name: "Williamson County",
        description: "Franklin and Brentwood anchor Williamson County, Tennessee's wealthiest county where Williamson Medical Center and Vanderbilt Children's (Franklin) serve an affluent suburban population with exceptional commercial and Medicare Advantage profiles.",
      },
      {
        name: "Montgomery County",
        description: "Clarksville and Fort Campbell nearby anchor Montgomery County where Tennova Healthcare Clarksville and Blanchfield Army Community Hospital serve a military-affiliated population with significant TRICARE billing alongside growing civilian Medicare needs.",
      },
      {
        name: "Rutherford County",
        description: "Murfreesboro anchors Rutherford County's explosive Nashville metro growth where Saint Thomas Rutherford Hospital and TriStar StoneCrest Medical Center serve a young, commercially insured suburban population with low Medicaid enrollment.",
      },
    ],
  },
  {
    slug: "texas",
    name: "Texas",
    abbr: "TX",
    counties: [
      {
        name: "Harris County",
        description: "Houston, Texas' largest city, anchors Harris County where Texas Medical Center — the world's largest — houses the MD Anderson Cancer Center, Houston Methodist, and CHI St. Luke's, serving a payer mix from energy-industry commercial plans to significant Medicaid managed care enrollment.",
      },
      {
        name: "Dallas County",
        description: "Dallas anchors Dallas County where Parkland Health, UT Southwestern Medical Center, and HCA Texas Healthcare serve a population from Dallas's urban Medicaid populations to significant Medicare Advantage penetration from the metro's growing retiree community.",
      },
      {
        name: "Tarrant County",
        description: "Fort Worth anchors Tarrant County where Texas Health Resources and Medical City Healthcare serve a population spanning Fort Worth's cattle-ranching heritage to significant Medicare Advantage enrollment from the DFW metro's suburban retiree growth.",
      },
      {
        name: "Travis County",
        description: "Austin, Texas' capital, anchors Travis County where Ascension Seton and UT Health Austin serve a population from state government employment to significant Medicaid managed care enrollment from the surrounding Hill Country rural communities.",
      },
      {
        name: "Bexar County",
        description: "San Antonio, Texas' second-largest city, anchors Bexar County where University Health System and Baptist Health System serve a population from the city's significant military affiliation (Fort Sam Houston) with TRICARE billing to significant Medicaid enrollment.",
      },
      {
        name: "El Paso County",
        description: "El Paso anchors the Texas border where University Medical Center of El Paso and The Hospitals of Providence serve a large Medicaid-enrolled border community with significant Medicare enrollment and growing Military Health System referrals.",
      },
      {
        name: "Hidalgo County",
        description: "McAllen anchors Hidalgo County where South Texas Health System and DHR Health serve the Rio Grande Valley's large Medicaid-enrolled population, navigating complex border healthcare billing including Valley Baptist Health System.",
      },
      {
        name: "Collin County",
        description: "Plano and McKinney anchor Collin County's affluent DFW suburban growth where Medical City Healthcare and Baylor Scott & White serve an affluent commercially insured population with some of Texas' highest Medicare Advantage penetration.",
      },
      {
        name: "Hays County",
        description: "San Marcos and Kyle anchor Hays County's explosive Austin metro suburban growth where Dell Seton Medical Center at UT and Wimberley Emergency Hospital serve a growing young suburban population with strong commercial enrollment.",
      },
      {
        name: "Fort Bend County",
        description: "Sugar Land and Missouri City anchor Fort Bend County's affluent Houston suburban growth where Houston Methodist Sugar Land and Memorial Hermann Fort Bend serve an affluent commercially insured population with significant Medicare Advantage.",
      },
    ],
  },
  {
    slug: "utah",
    name: "Utah",
    abbr: "UT",
    counties: [
      {
        name: "Salt Lake County",
        description: "Salt Lake City, Utah's capital and largest city, anchors Salt Lake County where Intermountain Healthcare's flagship LDS Hospital and University of Utah Health serve a payer mix from the state's dominant healthcare employer to significant Medicaid managed care enrollment.",
      },
      {
        name: "Utah County",
        description: "Provo and Orem anchor Utah County where Intermountain Healthcare's Utah Valley Hospital and Revere Health serve a population dominated by young Mormon families with large Medicaid enrollment and growing commercial coverage from Utah's tech boom.",
      },
      {
        name: "Davis County",
        description: "Clearfield and Farmington anchor Davis County where Davis Hospital and Medical Center and Intermountain's Layton Hospital serve a growing population with strong commercial enrollment from Hill Air Force Base military employment.",
      },
      {
        name: "Weber County",
        description: "Ogden anchors Weber County where Ogden Regional Medical Center and McKay-Dee Hospital (Intermountain) serve a population from Hill Air Force Base military affiliation to significant Medicare enrollment in the Wasatch Back retirement communities.",
      },
      {
        name: "Washington County",
        description: "St. George and the Sunbelt retirement boom anchor Washington County where Intermountain Healthcare's St. George Regional Hospital serves a rapidly growing Medicare-heavy retiree population from the Arizona border.",
      },
      {
        name: "Cache County",
        description: "Logan and Utah State University anchor Cache County where Logan Regional Hospital serves a population dominated by university employment with strong commercial coverage and growing Medicare enrollment from the surrounding agricultural communities.",
      },
      {
        name: "Iron County",
        description: "Cedar City and Southern Utah University anchor Iron County where Valley View Medical Center serves a growing population with significant Medicaid enrollment from the Southern Utah University student community and growing Medicare needs.",
      },
      {
        name: "Uintah County",
        description: "Vernal anchors Uintah County where Uintah Basin Medical Center serves a population with significant commercial oil and gas industry billing alongside Medicare enrollment from the surrounding Uintah Basin rural communities.",
      },
      {
        name: "San Juan County",
        description: "Blanding and the Navajo Nation's southeastern Utah communities anchor San Juan County where Blue Mountain Hospital and the Indian Health Service serve a predominantly Navajo population with significant Medicaid and Indian Health Service billing.",
      },
      {
        name: "Wasatch County",
        description: "Heber City anchors Wasatch County where Heber Valley Medical Center (Intermountain) serves a growing affluent retiree and outdoor-recreation professional population with significant Medicare enrollment in Utah's most exclusive mountain community.",
      },
    ],
  },
  {
    slug: "vermont",
    name: "Vermont",
    abbr: "VT",
    counties: [
      {
        name: "Chittenden County",
        description: "Burlington, Vermont's largest city, anchors Chittenden County where University of Vermont Medical Center serves as Vermont's only academic medical center, serving a payer mix from the state's largest Medicaid managed care enrollment to significant Medicare populations.",
      },
      {
        name: "Rutland County",
        description: "Rutland anchors Rutland County where Rutland Regional Medical Center serves a predominantly Medicare population in Vermont's largest rural county with significant telehealth billing for geographically isolated communities.",
      },
      {
        name: "Windsor County",
        description: "White River Junction and Killington anchor Windsor County where Mt. Ascutney Hospital and the White River Junction VA Medical Center serve a Medicare-heavy population spanning Vermont's ski resort retirement communities.",
      },
      {
        name: "Franklin County",
        description: "St. Albans and Swanton anchor Franklin County where Northwestern Medical Center serves a population spanning Lake Champlain suburban growth to significant Medicare enrollment in Vermont's agricultural communities.",
      },
      {
        name: "Addison County",
        description: "Middlebury and Middlebury College anchor Addison County where Porter Medical Center serves a predominantly Medicare population in Vermont's agricultural corridor with significant telehealth and home health billing needs.",
      },
      {
        name: "Orange County",
        description: "Randolph and Chelsea anchor Orange County where Gifford Medical Center serves a geographically dispersed Medicare-heavy rural population in one of Vermont's most healthcare-challenged counties.",
      },
      {
        name: "Washington County",
        description: "Barre and Montpelier anchor Washington County where Central Vermont Medical Center serves a population blending state government employment with significant Medicare and Medicaid enrollment from central Vermont's rural communities.",
      },
      {
        name: "Windham County",
        description: "Brattleboro and Bellows Falls anchor Windham County where Brattleboro Memorial Hospital serves a Medicare-heavy population in Vermont's southeastern communities with significant behavioral health billing needs.",
      },
      {
        name: "Bennington County",
        description: "Bennington and Manchester anchor Bennington County where Southwestern Vermont Medical Center and the VA Bennington Clinic serve a Medicare-heavy population in Vermont's most geographically diverse county.",
      },
      {
        name: "Orleans County",
        description: "Newport and Derby Line anchor Orleans County where North Country Hospital and Health Center serves a geographically isolated Medicare-heavy population in Vermont's most rural northeastern county.",
      },
    ],
  },
  {
    slug: "virginia",
    name: "Virginia",
    abbr: "VA",
    counties: [
      {
        name: "Fairfax County",
        description: "Northern Virginia's suburban hub, Fairfax County is Virginia's wealthiest and most populous where Inova Health System's flagship hospitals and Kaiser Permanente serve a population with exceptional commercial and Medicare Advantage enrollment.",
      },
      {
        name: "Virginia Beach City",
        description: "Virginia's largest independent city, Virginia Beach anchors the Tidewater region where Sentara Leigh Hospital and the Naval Medical Center Portsmouth serve a military-affiliated population with significant TRICARE and VA billing.",
      },
      {
        name: "Prince William County",
        description: "Manassas and Woodbridge anchor Prince William County's Northern Virginia suburban growth where Novant Health UVA Health System and HCA Prince William Medical Center serve a commercially insured population with growing Medicaid managed care enrollment.",
      },
      {
        name: "Norfolk City",
        description: "Norfolk and Naval Station Norfolk anchor Norfolk City where Sentara Norfolk General Hospital and CHKD serve a military-affiliated population with significant TRICARE billing alongside significant Medicaid managed care enrollment.",
      },
      {
        name: "Chesapeake City",
        description: "Chesapeake's suburban growth anchors the South Hampton Roads region where Chesapeake Regional Medical Center serves a population spanning the military family's TRICARE needs to growing suburban commercial coverage.",
      },
      {
        name: "Arlington County",
        description: "Arlington's Pentagon adjacency shapes its healthcare market where Virginia Hospital Center and the Walter Reed National Military Medical Center nearby serve a military-affiliated population with significant TRICARE billing.",
      },
      {
        name: "Henrico County",
        description: "Richmond's western suburbs anchor Henrico County where HCA Virginia's Henrico Doctors' Hospital and Bon Secours Memorial Regional Medical Center serve an affluent suburban population with strong commercial and Medicare Advantage enrollment.",
      },
      {
        name: "Loudoun County",
        description: "Leesburg and Ashburn anchor Loudoun County's explosive Northern Virginia tech growth where Inova Loudoun Hospital and Novant Health UVA Health System Leesburg serve an affluent commercially insured population.",
      },
      {
        name: "Chesterfield County",
        description: "Midlothian and Chester anchor Chesterfield County where HCA Johnston-Willis Hospital and Bon Secours St. Francis Medical Center serve a growing Medicare-heavy retiree population south of Richmond.",
      },
      {
        name: "Hampton City",
        description: "Hampton and Langley Air Force Base anchor Hampton City where Sentara CarePlex Hospital and the Hampton VA Medical Center serve a military-affiliated population with significant TRICARE and VA billing in the Virginia Peninsula.",
      },
    ],
  },
  {
    slug: "washington",
    name: "Washington",
    abbr: "WA",
    counties: [
      {
        name: "King County",
        description: "Seattle, Washington State's largest city, anchors King County where Virginia Mason Franciscan Health and UW Medicine serve a payer mix from tech-sector commercial plans to significant Medicaid managed care enrollment, navigating Washington State's pioneering value-based care models.",
      },
      {
        name: "Pierce County",
        description: "Tacoma anchors Pierce County where MultiCare Health System and the VA Puget Sound Health Care System serve a population from Joint Base Lewis-McChord military affiliation to significant Medicare and Medicaid managed care enrollment.",
      },
      {
        name: "Snohomish County",
        description: "Everett and Lynnwood anchor Snohomish County where Providence Regional Medical Center Everett and Optum serve a population spanning Boeing aerospace employment to growing suburban Seattle commuter communities with strong commercial coverage.",
      },
      {
        name: "Spokane County",
        description: "Spokane anchors Eastern Washington's healthcare hub where Providence Health & Services and MultiCare Deaconess Hospital serve a population from the surrounding rural agricultural communities to significant Medicare enrollment.",
      },
      {
        name: "Kitsap County",
        description: "Bremerton and Silverdale anchor Kitsap County where St. Joseph Medical Center and the Naval Base Kitsap-Bremerton nearby serve a military-affiliated population with significant TRICARE billing alongside growing civilian Medicare enrollment.",
      },
      {
        name: "Clark County",
        description: "Vancouver and the Portland metro's Washington side anchor Clark County where PeaceHealth Southwest Medical Center and Legacy Salmon Creek Medical Center serve a growing suburban population with strong commercial enrollment from the Portland metro spillover.",
      },
      {
        name: "Thurston County",
        description: "Olympia, Washington's capital, anchors Thurston County where Providence St. Peter's Hospital and the Olympia VA Clinic serve a population dominated by state government employment with significant Medicare and Medicaid managed care enrollment.",
      },
      {
        name: "Benton County",
        description: "Richland and Kennewick anchor Benton County where Kadlec Regional Medical Center and Trios Health serve a population from Hanford nuclear site employment to significant Medicare enrollment in Washington's wine-country retirement communities.",
      },
      {
        name: "Whatcom County",
        description: "Bellingham and Western Washington University anchor Whatcom County where PeaceHealth St. Joseph Medical Center serves a Medicare-heavy population with significant behavioral health billing needs in Washington's most northern Pacific coastal county.",
      },
      {
        name: "Yakima County",
        description: "Yakima anchors Yakima County where Virginia Mason Memorial and Astria Health serve a population with significant Medicaid enrollment from agricultural (apple and hop) farmworker communities alongside growing Medicare needs from retirement migration.",
      },
    ],
  },
  {
    slug: "west-virginia",
    name: "West Virginia",
    abbr: "WV",
    counties: [
      {
        name: "Kanawha County",
        description: "Charleston, West Virginia's capital and largest city, anchors Kanawha County where CAMC Health System and Thomas Health System serve a population spanning state government employment to significant Medicare enrollment, navigating West Virginia's high chronic disease burden.",
      },
      {
        name: "Cabell County",
        description: "Huntington and Marshall University anchor Cabell County where Cabell Huntington Hospital and St. Mary's Medical Center serve a population spanning the opioid epidemic's aftermath with significant Medicaid managed care enrollment and complex behavioral health billing.",
      },
      {
        name: "Monongalia County",
        description: "Morgantown and West Virginia University anchor Monongalia County where WVU Medicine J.W. Ruby Memorial Hospital serves as West Virginia's academic medical center, serving a growing population from university employment to significant Medicare enrollment.",
      },
      {
        name: "Berkeley County",
        description: "Martinsburg and the DC metro's exurban expansion anchor Berkeley County where WVU Medicine Berkeley Medical Center serves a growing suburban population with significant Medicare enrollment from the Washington DC-spillover retiree migration.",
      },
      {
        name: "Wood County",
        description: "Parkersburg anchors Wood County where Camden Clark Medical Center (WVU Medicine) serves a predominantly Medicare population in West Virginia's Ohio River Valley with significant chronic disease management billing needs.",
      },
      {
        name: "Harrison County",
        description: "Clarksburg anchors Harrison County where United Hospital Center (WVU Medicine) serves a Medicare-heavy population in north central West Virginia's Appalachian communities with significant behavioral health billing needs.",
      },
      {
        name: "Marion County",
        description: "Fairmont anchors Marion County where WVU Medicine Fairmont Regional Medical Center serves a geographically isolated Medicare-heavy population in West Virginia's coal country with significant Medicare Advantage enrollment.",
      },
      {
        name: "Jefferson County",
        description: "Charles Town and Harpers Ferry anchor Jefferson County where Jefferson Medical Center (WVU Medicine) serves a population of Washington DC commuters with growing commercial enrollment alongside significant Medicare needs.",
      },
      {
        name: "Fayette County",
        description: "Oak Hill and Beckley nearby anchor Fayette County where Raleigh Regional Hospital and the Beckley VA Medical Center serve a Medicare-heavy population in West Virginia's New River Gorge region with significant opioid aftermath behavioral health needs.",
      },
      {
        name: "Mercer County",
        description: "Bluefield anchors Mercer County where Princeton Community Hospital and the Beckley VA Medical Center serve a geographically isolated Medicare-heavy population in southern West Virginia's coal country.",
      },
    ],
  },
  {
    slug: "wisconsin",
    name: "Wisconsin",
    abbr: "WI",
    counties: [
      {
        name: "Milwaukee County",
        description: "Milwaukee, Wisconsin's largest city, anchors Milwaukee County where Froedtert Hospital, the Medical College of Wisconsin, and Ascension Wisconsin serve a payer mix from urban Medicaid populations to significant Medicare Advantage penetration.",
      },
      {
        name: "Dane County",
        description: "Madison, Wisconsin's capital, anchors Dane County where UW Health and SSM Health St. Mary's Hospital serve a population dominated by state government and university employment with strong commercial coverage and growing Medicare enrollment.",
      },
      {
        name: "Waukesha County",
        description: "Waukesha and Brookfield anchor Waukesha County where ProHealth Care and Ascension Wisconsin serve an affluent suburban Milwaukee population with strong commercial and Medicare Advantage enrollment in Wisconsin's wealthiest suburban county.",
      },
      {
        name: "Brown County",
        description: "Green Bay anchors Brown County where Bellin Health and HSHS St. Vincent Hospital serve a population spanning Green Bay Packers corporate employment to significant Medicare and Medicaid managed care enrollment across the Fox River Valley.",
      },
      {
        name: "Outagamie County",
        description: "Appleton anchors Outagamie County where ThedaCare Regional Medical Center and Ascension St. Elizabeth Hospital serve a population with strong commercial coverage from paper and manufacturing employment alongside growing Medicare enrollment.",
      },
      {
        name: "Marathon County",
        description: "Wausau anchors Marathon County where Aspirus Health and Marshfield Clinic Health System serve a Medicare-heavy population across Wisconsin's north central rural communities with significant Medicaid managed care enrollment.",
      },
      {
        name: "Racine County",
        description: "Racine and Mount Pleasant anchor Racine County where Ascension All Saints and Advocate Aurora Health serve a population spanning post-industrial urban Medicaid to significant Medicare enrollment in the Lake Michigan suburban communities.",
      },
      {
        name: "Winnebago County",
        description: "Oshkosh and Fond du Lac nearby anchor Winnebago County where Ascension Mercy Health and ThedaCare BMC Fond du Lac serve a Medicare-heavy population in Wisconsin's east central Fox River Valley agricultural and manufacturing communities.",
      },
      {
        name: "Kenosha County",
        description: "Kenosha and Pleasant Prairie anchor Kenosha County where Froedtert South and the Chicago-metro healthcare spillover serve a growing population with significant Medicare enrollment from the Illinois border retirement communities.",
      },
      {
        name: "La Crosse County",
        description: "La Crosse and the Mississippi River anchor La Crosse County where Gundersen Health System and Mayo Clinic Health System Franciscan Healthcare serve a population from the University of Wisconsin-La Crosse employment to significant Medicare enrollment.",
      },
    ],
  },
  {
    slug: "wyoming",
    name: "Wyoming",
    abbr: "WY",
    counties: [
      {
        name: "Natrona County",
        description: "Casper, Wyoming's largest city, anchors Natrona County where Wyoming Medical Center and the VA Montana Health Care System's sheridan division serve a population from oil and gas industry commercial coverage to significant Medicare enrollment.",
      },
      {
        name: "Laramie County",
        description: "Cheyenne, Wyoming's capital, anchors Laramie County where Cheyenne Regional Medical Center and the Cheyenne VA Medical Center serve a military-affiliated population with significant TRICARE and VA billing alongside growing civilian Medicare needs.",
      },
      {
        name: "Park County",
        description: "Cody and the East Yellowstone gateway anchor Park County where Cody Regional Health and the VA Black Hills Health Care System's proximity serve a Medicare-heavy population in Wyoming's premier tourism and retirement destination.",
      },
      {
        name: "Goshen County",
        description: "Torrington anchors Goshen County where community healthcare and the University of Wyoming's regional clinics serve a small population with significant Medicare and Medicaid enrollment in Wyoming's most agricultural northeastern county.",
      },
      {
        name: "Uinta County",
        description: "Evanston and the Utah border anchor Uinta County where Evanston Regional Hospital serves a small population with significant Medicaid enrollment from the interstate truckstop and tourism economy along Interstate 80.",
      },
      {
        name: "Sheridan County",
        description: "Sheridan anchors Sheridan County where Sheridan Memorial Hospital and the VA Montana Health Care System's Sheridan division serve a Medicare-heavy population in Wyoming's most prestigious mountain retirement community.",
      },
      {
        name: "Campbell County",
        description: "Gillette anchors Campbell County where Campbell County Memorial Hospital serves a population with significant commercial oil and gas industry coverage alongside growing Medicare enrollment in Wyoming's energy-boom county.",
      },
      {
        name: "Converse County",
        description: "Douglas and Glenrock anchor Converse County where Memorial Hospital of Converse County serves a small population with significant Medicare enrollment from the surrounding ranching and energy-industry retirement communities.",
      },
      {
        name: "Sweetwater County",
        description: "Rock Springs and Green River anchor Sweetwater County where Memorial Hospital Sweetwater County serves a population from trona mining and the Union Pacific railroad with significant workers' compensation and commercial billing alongside Medicare needs.",
      },
      {
        name: " Fremont County",
        description: "Lander and Riverton anchor Fremont County where SageWest Health Care and the Wind River Indian Family Health Center serve a population spanning the Wind River Indian Reservation with significant Indian Health Service and Medicaid billing.",
      },
    ],
  },
];

export function getStateBySlug(slug: string): USState | undefined {
  return usStates.find((s) => s.slug === slug);
}

export function getCountyBySlug(stateSlug: string, countySlug: string): County | undefined {
  const state = getStateBySlug(stateSlug);
  return state?.counties.find((c) => c.name.toLowerCase().replace(/\s+/g, "-") === countySlug);
}

export function slugifyCounty(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}
