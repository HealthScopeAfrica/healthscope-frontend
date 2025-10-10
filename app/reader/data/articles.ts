/**
 * Data layer for articles and featured content
 * This abstraction allows easy transition from mock data to API calls
 * TODO: Replace with actual API endpoints when backend is ready
 */

export interface Article {
  id: number
  title: string
  description: string
  content: string // Full article content for detail view
  author: string
  category: string
  location: string
  readTime: string
  views: string
  language: string
  verified: boolean
  hasAudio: boolean
  image: string
  publishedAt: string
  featured?: boolean    // Flag for featured articles
  trending?: boolean    // Flag for trending articles
  recommended?: boolean // Flag for recommended articles
}

// Remove the separate FeaturedArticle interface - not needed anymore

/**
 * Mock data for regular articles
 * TODO: Replace with API call to GET /api/articles
 */
export const mockArticles: Article[] = [
  {
    id: 1,
    category: "Infectious Disease",
    title: "Understanding Malaria Prevention in Rural Communities",
    description: "A comprehensive guide to preventing malaria in rural African communities, including proven strategies and community-based interventions.",
    content: `
      <h2>Introduction</h2>
      <p>Malaria remains one of the most significant health challenges in rural African communities. This comprehensive guide provides evidence-based strategies for prevention and community intervention.</p>
      
      <h2>Understanding Malaria Transmission</h2>
      <p>Malaria is transmitted through the bite of infected female Anopheles mosquitoes. Understanding this transmission cycle is crucial for effective prevention.</p>
      
      <h2>Prevention Strategies</h2>
      <h3>1. Insecticide-Treated Nets (ITNs)</h3>
      <p>ITNs are one of the most effective tools for malaria prevention. When used correctly, they can reduce malaria transmission by up to 50%.</p>
      
      <h3>2. Indoor Residual Spraying (IRS)</h3>
      <p>IRS involves spraying the interior walls of homes with insecticides that kill mosquitoes when they come into contact with the treated surfaces.</p>
      
      <h3>3. Environmental Management</h3>
      <p>Eliminating mosquito breeding sites by removing stagnant water sources around homes and communities.</p>
      
      <h2>Community-Based Interventions</h2>
      <p>Successful malaria prevention requires community engagement and education. Training local health workers and community leaders is essential.</p>
      
      <h2>Conclusion</h2>
      <p>Malaria prevention in rural communities requires a multi-faceted approach combining personal protection, environmental management, and community engagement.</p>
    `,
    author: "Dr. Amina Yakubu",
    location: "WHO Africa",
    readTime: "8 min read",
    views: "12,132 views",
    language: "EN",
    verified: true,
    hasAudio: true,
    image: "https://images.unsplash.com/photo-1707386821500-09f8a666706b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fE1hbGFyaWElMjBzaWNrbmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
    publishedAt: "2024-10-08",
    trending: true,      // This article is trending
    recommended: true,   // This article is recommended
  },
  {
    id: 2,
    category: "Nutrition",
    title: "Nutrition Guidelines for Growing Children",
    description: "Essential nutrition guidelines, meal planning tips and healthy eating habits for child development.",
    content: `
      <h2>The Importance of Proper Nutrition in Childhood</h2>
      <p>Proper nutrition during childhood is fundamental for healthy growth, cognitive development, and establishing lifelong healthy eating habits.</p>
      
      <h2>Essential Nutrients for Growing Children</h2>
      <h3>Protein</h3>
      <p>Children need protein for growth and development. Good sources include lean meats, fish, eggs, beans, and dairy products.</p>
      
      <h3>Calcium and Vitamin D</h3>
      <p>Critical for bone development. Sources include milk, yogurt, cheese, and leafy green vegetables.</p>
      
      <h3>Iron</h3>
      <p>Prevents anemia and supports cognitive development. Found in red meat, spinach, and fortified cereals.</p>
      
      <h2>Meal Planning Tips</h2>
      <ul>
        <li>Include fruits and vegetables in every meal</li>
        <li>Choose whole grains over refined grains</li>
        <li>Limit sugary drinks and snacks</li>
        <li>Encourage regular meal times</li>
      </ul>
      
      <h2>Common Nutritional Challenges</h2>
      <p>Many children in Africa face malnutrition. Understanding how to address these challenges with locally available foods is crucial.</p>
    `,
    author: "Prof. Fatima Hassan",
    location: "Global Africa",
    readTime: "6 min read",
    views: "1,234 views",
    language: "EN",
    verified: true,
    hasAudio: true,
    image: "https://images.unsplash.com/photo-1704270027011-c532d6f1fba3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fE51dHJpdGlvbiUyMGZvciUyMGdyb3dpbmclMjBjaGlsZHJlbiUyMGluJTIwQWZyaWNhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    publishedAt: "2024-10-07",
    recommended: true,
  },
  {
    id: 3,
    category: "Mental Health",
    title: "Mental Health and Stress Management",
    description: "Addressing mental health challenges and practical approaches for managing stress.",
    content: `
      <h2>Understanding Mental Health</h2>
      <p>Mental health is just as important as physical health. It affects how we think, feel, and act in our daily lives.</p>
      
      <h2>Common Mental Health Challenges</h2>
      <h3>Anxiety</h3>
      <p>Excessive worry or fear that interferes with daily activities.</p>
      
      <h3>Depression</h3>
      <p>Persistent feelings of sadness, hopelessness, and loss of interest in activities.</p>
      
      <h2>Stress Management Techniques</h2>
      <h3>Deep Breathing Exercises</h3>
      <p>Simple breathing techniques can help reduce stress and anxiety levels.</p>
      
      <h3>Physical Activity</h3>
      <p>Regular exercise releases endorphins and helps improve mood.</p>
      
      <h3>Social Support</h3>
      <p>Connecting with family and friends provides emotional support during difficult times.</p>
      
      <h2>When to Seek Help</h2>
      <p>If mental health challenges persist or interfere with daily life, it's important to seek professional help.</p>
    `,
    author: "Sarah Okonkwo",
    location: "Mental Health Africa",
    readTime: "10 min read",
    views: "700 views",
    language: "EN",
    verified: true,
    hasAudio: false,
    image: "https://images.unsplash.com/photo-1683119510482-be8f631d8353?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    publishedAt: "2024-10-06",
    recommended: true,   // Mental health is recommended content
  },
  {
    id: 4,
    category: "Maternal Health",
    title: "Maternal Health: Prenatal Care Best Practices",
    description: "Essential prenatal care guidelines for expectant mothers across different trimesters.",
    content: `
      <h2>The Importance of Prenatal Care</h2>
      <p>Regular prenatal care is essential for monitoring the health of both mother and baby throughout pregnancy.</p>
      
      <h2>First Trimester (Weeks 1-12)</h2>
      <h3>Initial Consultation</h3>
      <p>Schedule your first prenatal visit as soon as you suspect pregnancy.</p>
      
      <h3>Key Tests and Screenings</h3>
      <ul>
        <li>Blood tests for infections and genetic conditions</li>
        <li>Urine tests for protein and bacteria</li>
        <li>Blood pressure monitoring</li>
      </ul>
      
      <h2>Second Trimester (Weeks 13-26)</h2>
      <p>Often called the "golden period" of pregnancy, most women feel better during this time.</p>
      
      <h3>Ultrasound Screening</h3>
      <p>Anatomy scan to check baby's development and detect any abnormalities.</p>
      
      <h2>Third Trimester (Weeks 27-40)</h2>
      <h3>Increased Monitoring</h3>
      <p>More frequent checkups to monitor baby's growth and position.</p>
      
      <h3>Birth Plan Preparation</h3>
      <p>Discuss delivery options and preferences with your healthcare provider.</p>
      
      <h2>Nutrition During Pregnancy</h2>
      <p>A balanced diet with adequate folic acid, iron, and calcium is crucial for healthy fetal development.</p>
    `,
    author: "Dr. Kwame Nkrumah",
    location: "African Health Alliance",
    readTime: "9 min read",
    views: "5,170 views",
    language: "EN",
    verified: true,
    hasAudio: true,
    image: "https://plus.unsplash.com/premium_photo-1726750850117-6eeb0dcedd6e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1437",
    publishedAt: "2024-10-05",
  },
  {
    id: 5,
    category: "First Aid",
    title: "First Aid Essentials: What Every Household Should Know",
    description: "Basic first aid techniques and emergency response procedures that can save lives.",
    content: `
      <h2>Why First Aid Knowledge Matters</h2>
      <p>First aid knowledge can mean the difference between life and death in emergency situations. Every household should have basic first aid supplies and knowledge.</p>
      
      <h2>Essential First Aid Kit Items</h2>
      <ul>
        <li>Adhesive bandages (various sizes)</li>
        <li>Sterile gauze pads</li>
        <li>Medical tape</li>
        <li>Antiseptic wipes</li>
        <li>Instant cold packs</li>
        <li>Thermometer</li>
        <li>Scissors</li>
        <li>Tweezers</li>
      </ul>
      
      <h2>Basic First Aid Techniques</h2>
      <h3>Treating Cuts and Scrapes</h3>
      <p>Clean the wound with water, apply antiseptic, and cover with a sterile bandage.</p>
      
      <h3>Burns</h3>
      <p>For minor burns, run cool water over the affected area for 10-15 minutes.</p>
      
      <h3>Choking</h3>
      <p>Learn the Heimlich maneuver for adults and back blows for infants.</p>
      
      <h2>When to Seek Professional Help</h2>
      <p>Know when an injury is beyond first aid and requires professional medical attention.</p>
      
      <h2>Emergency Contact Information</h2>
      <p>Keep emergency numbers easily accessible in your first aid kit.</p>
    `,
    author: "Juma Kisiaki",
    location: "Red Cross Africa",
    readTime: "8 min read",
    views: "9,010 views",
    language: "Kiswahili",
    verified: true,
    hasAudio: true,
    image: "https://images.unsplash.com/photo-1584739555405-37e477519d5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    publishedAt: "2024-10-04",
  },
  {
    id: 6,
    category: "Preventive Care",
    title: "Exercise and Cardiovascular Health",
    description: "How regular physical activity can prevent heart disease and improve overall wellness.",
    content: `
      <h2>The Heart-Exercise Connection</h2>
      <p>Regular physical activity is one of the most effective ways to prevent cardiovascular disease and maintain heart health.</p>
      
      <h2>Benefits of Regular Exercise</h2>
      <h3>Heart Strengthening</h3>
      <p>Exercise makes your heart muscle stronger, allowing it to pump blood more efficiently.</p>
      
      <h3>Blood Pressure Reduction</h3>
      <p>Regular physical activity can help lower both systolic and diastolic blood pressure.</p>
      
      <h3>Cholesterol Management</h3>
      <p>Exercise helps increase HDL (good) cholesterol while lowering LDL (bad) cholesterol.</p>
      
      <h2>Types of Heart-Healthy Exercise</h2>
      <h3>Aerobic Exercise</h3>
      <p>Activities like walking, jogging, swimming, and cycling that increase heart rate.</p>
      
      <h3>Strength Training</h3>
      <p>Resistance exercises that build muscle and support overall cardiovascular health.</p>
      
      <h3>Flexibility and Balance</h3>
      <p>Yoga and stretching exercises that complement cardiovascular workouts.</p>
      
      <h2>Getting Started Safely</h2>
      <p>Start slowly and gradually increase intensity. Consult with a healthcare provider before beginning any new exercise program.</p>
      
      <h2>Exercise Recommendations</h2>
      <p>Aim for at least 150 minutes of moderate-intensity aerobic activity per week.</p>
    `,
    author: "Dr. Sekou Diarra",
    location: "African Health Alliance",
    readTime: "7 min read",
    views: "585 views",
    language: "EN",
    verified: true,
    hasAudio: true,
    image: "https://plus.unsplash.com/premium_photo-1664910952496-b8cf8780ee7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
    publishedAt: "2024-10-03",
  },
]

/**
 * Mock data for featured articles
 * TODO: Replace with API call to GET /api/articles/featured
 */
export const mockFeaturedArticles: Article[] = [
  {
    id: 101,
    category: "General Health",
    title: "Understanding Malaria Prevention in Sub-Saharan Africa",
    description: "Comprehensive strategies for malaria prevention with focus on community-based interventions and proven prevention methods.",
    content: `
      <h2>Malaria: A Persistent Challenge</h2>
      <p>Malaria continues to be a major public health challenge in Sub-Saharan Africa, affecting millions of people annually. This comprehensive guide focuses on evidence-based prevention strategies.</p>
      
      <h2>The Burden of Malaria in Sub-Saharan Africa</h2>
      <p>Sub-Saharan Africa bears the heaviest burden of malaria worldwide, accounting for approximately 95% of malaria cases and deaths globally.</p>
      
      <h2>Vector Control Strategies</h2>
      <h3>Long-Lasting Insecticidal Nets (LLINs)</h3>
      <p>LLINs remain the cornerstone of malaria prevention. When used consistently, they provide significant protection against mosquito bites.</p>
      
      <h3>Indoor Residual Spraying Programs</h3>
      <p>Systematic IRS programs have shown remarkable success in reducing malaria transmission in targeted areas.</p>
      
      <h2>Community Engagement and Education</h2>
      <p>Successful malaria prevention requires active community participation and culturally appropriate education programs.</p>
      
      <h3>Training Community Health Workers</h3>
      <p>Empowering local health workers with knowledge and tools for malaria prevention and early treatment.</p>
      
      <h2>Environmental Management</h2>
      <p>Addressing mosquito breeding sites through community-based environmental management programs.</p>
      
      <h2>Future Perspectives</h2>
      <p>Emerging technologies and innovative approaches offer hope for malaria elimination in the region.</p>
    `,
    author: "Dr. Amina Olufar",
    location: "WHO Africa",
    readTime: "8 min read",
    views: "25,420 views",
    language: "EN",
    verified: true,
    hasAudio: true,
    image: "https://plus.unsplash.com/premium_photo-1723107368358-1cf57017d5a4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
    publishedAt: "2024-10-09",
    trending: true,
    featured: true,
  },
  {
    id: 102,
    category: "Mental Health",
    title: "Mental Health Awareness: Breaking the Stigma",
    description: "Addressing mental health stigma in African communities and promoting awareness for better mental wellness.",
    content: `
      <h2>The Silent Struggle</h2>
      <p>Mental health challenges affect millions across Africa, yet stigma and lack of awareness prevent many from seeking help.</p>
      
      <h2>Understanding Mental Health Stigma</h2>
      <p>Stigma surrounding mental health is often rooted in cultural beliefs, lack of education, and misconceptions about mental illness.</p>
      
      <h3>Common Misconceptions</h3>
      <ul>
        <li>Mental illness is a sign of weakness</li>
        <li>Mental health problems are caused by supernatural forces</li>
        <li>People with mental illness are dangerous</li>
        <li>Mental health issues cannot be treated</li>
      </ul>
      
      <h2>Breaking Down Barriers</h2>
      <h3>Education and Awareness</h3>
      <p>Comprehensive education programs can help dispel myths and promote understanding of mental health.</p>
      
      <h3>Community-Based Support</h3>
      <p>Developing support systems within communities that respect cultural values while promoting mental wellness.</p>
      
      <h2>Signs to Watch For</h2>
      <p>Recognizing early signs of mental health challenges can lead to timely intervention and better outcomes.</p>
      
      <h2>Treatment and Support Options</h2>
      <p>Various treatment options are available, from counseling and therapy to medication and community support groups.</p>
      
      <h2>Building Mental Resilience</h2>
      <p>Strategies for maintaining good mental health and building resilience in daily life.</p>
    `,
    author: "Dr. Kwame Asante",
    location: "Mental Health Africa",
    readTime: "12 min read",
    views: "18,750 views",
    language: "EN",
    verified: true,
    hasAudio: true,
    image: "https://plus.unsplash.com/premium_photo-1741192231027-d3f015577102?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    publishedAt: "2024-10-08",
    trending: false,
    featured: true,
  },
  {
    id: 103,
    category: "Women's Health",
    title: "Nutrition During Pregnancy: An African Perspective",
    description: "Essential nutrition guidelines for pregnant women with focus on locally available foods and cultural dietary practices.",
    content: `
      <h2>Nutrition: The Foundation of Healthy Pregnancy</h2>
      <p>Proper nutrition during pregnancy is crucial for both maternal health and fetal development. This guide focuses on practical nutrition advice using foods readily available in African communities.</p>
      
      <h2>Nutritional Needs During Pregnancy</h2>
      <h3>Increased Caloric Requirements</h3>
      <p>Pregnant women need approximately 300-500 additional calories per day, especially in the second and third trimesters.</p>
      
      <h3>Essential Nutrients</h3>
      <ul>
        <li><strong>Folic Acid:</strong> Prevents neural tube defects</li>
        <li><strong>Iron:</strong> Prevents anemia and supports increased blood volume</li>
        <li><strong>Calcium:</strong> Essential for fetal bone development</li>
        <li><strong>Protein:</strong> Supports tissue growth and development</li>
      </ul>
      
      <h2>Local Food Sources</h2>
      <h3>Iron-Rich Foods</h3>
      <p>Dark leafy greens (spinach, kale), lean meats, fish, legumes, and fortified cereals.</p>
      
      <h3>Calcium Sources</h3>
      <p>Dairy products, sesame seeds, sardines with bones, and traditional leafy vegetables.</p>
      
      <h3>Protein Options</h3>
      <p>Fish, poultry, beans, lentils, nuts, and seeds readily available in local markets.</p>
      
      <h2>Cultural Dietary Practices</h2>
      <p>Incorporating traditional foods and cooking methods while ensuring nutritional adequacy.</p>
      
      <h2>Common Nutritional Challenges</h2>
      <p>Addressing iron deficiency anemia, morning sickness, and food aversions during pregnancy.</p>
      
      <h2>Meal Planning Tips</h2>
      <p>Practical advice for planning nutritious meals that are affordable and culturally appropriate.</p>
    `,
    author: "Dr. Fatima Hassan",
    location: "Maternal Health Africa",
    readTime: "10 min read",
    views: "15,200 views",
    language: "EN",
    verified: true,
    hasAudio: true,
    image: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
    publishedAt: "2024-10-07",
    trending: true,
    featured: true,
  },
]

/**
 * Service functions for fetching data
 * These can be easily replaced with actual API calls
 */

/**
 * Fetch all regular articles
 * TODO: Replace with actual API call
 */
export async function getArticles(): Promise<Article[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockArticles
}

/**
 * Fetch featured articles
 * TODO: Replace with actual API call
 */
export async function getFeaturedArticles(): Promise<Article[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockFeaturedArticles
}

/**
 * Fetch articles by type using flags
 * TODO: Replace with actual API call with filters
 */
export async function getArticlesByType(options: {
  featured?: boolean
  trending?: boolean
  recommended?: boolean
}): Promise<Article[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const allArticles = [...mockArticles, ...mockFeaturedArticles]
  
  return allArticles.filter(article => {
    if (options.featured !== undefined && article.featured !== options.featured) return false
    if (options.trending !== undefined && article.trending !== options.trending) return false
    if (options.recommended !== undefined && article.recommended !== options.recommended) return false
    return true
  })
}

/**
 * Fetch a single article by ID (works for both regular and featured)
 * TODO: Replace with actual API call
 */
export async function getArticleById(id: number): Promise<Article | null> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  // Search in both regular and featured articles
  const allArticles = [...mockArticles, ...mockFeaturedArticles]
  return allArticles.find(article => article.id === id) || null
}

/**
 * Search articles by title or category
 * TODO: Replace with actual API call with search parameters
 */
export async function searchArticles(query: string): Promise<Article[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const allArticles = [...mockArticles, ...mockFeaturedArticles]
  return allArticles.filter(article => 
    article.title.toLowerCase().includes(query.toLowerCase()) ||
    article.category.toLowerCase().includes(query.toLowerCase()) ||
    article.description.toLowerCase().includes(query.toLowerCase())
  )
}