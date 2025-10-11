// Shared articles data for public pages
export interface PublicArticle {
  id: number;
  category: string;
  title: string;
  description: string;
  author: string;
  location: string;
  readTime: string;
  views: string;
  language: string;
  verified: boolean;
  hasAudio: boolean;
  publishedAt: string;
  image: string;
  content: string;
  recommended?: boolean;
}

export const publicArticlesData: PublicArticle[] = [
  {
    id: 1,
    category: "Mental Health",
    title: "Understanding Depression in African Communities",
    description: "A comprehensive guide to recognizing and addressing mental health challenges in African communities.",
    author: "Dr. Amina Hassan",
    location: "Lagos, Nigeria",
    readTime: "5 min read",
    views: "1.2k views",
    language: "English",
    verified: true,
    hasAudio: true,
    publishedAt: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469",
    recommended: true,
    content: `
      <p>Mental health remains a significant concern across African communities, yet it is often surrounded by stigma and misconceptions. Understanding depression, its symptoms, and available treatment options is crucial for building healthier communities.</p>
      
      <h2>Recognizing the Signs</h2>
      <p>Depression manifests differently across cultures and individuals. In African communities, symptoms may include:</p>
      <ul>
        <li>Persistent feelings of sadness or emptiness</li>
        <li>Loss of interest in activities once enjoyed</li>
        <li>Changes in appetite or sleep patterns</li>
        <li>Difficulty concentrating or making decisions</li>
        <li>Physical symptoms like headaches or body aches</li>
      </ul>
      
      <h2>Cultural Considerations</h2>
      <p>Traditional healing practices and community support systems play vital roles in mental health care across Africa. Integrating these approaches with modern psychiatric care can provide more effective, culturally sensitive treatment options.</p>
      
      <h2>Breaking the Stigma</h2>
      <p>Education and open dialogue are essential for reducing the stigma around mental health. Community leaders, healthcare providers, and families all have roles to play in creating supportive environments for those struggling with depression.</p>
      
      <h2>Seeking Help</h2>
      <p>If you or someone you know is experiencing symptoms of depression, it's important to seek professional help. Many African countries now have mental health services available, and telehealth options are expanding access to care.</p>
    `
  },
  {
    id: 2,
    category: "Maternal Health",
    title: "Prenatal Care in Rural Areas",
    description: "Essential prenatal care practices for expectant mothers in rural African settings.",
    author: "Dr. Grace Mwangi",
    location: "Nairobi, Kenya",
    readTime: "8 min read",
    views: "2.1k views",
    language: "English",
    verified: true,
    hasAudio: false,
    publishedAt: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    recommended: false,
    content: `
      <p>Access to quality prenatal care remains a challenge in many rural areas across Africa. However, with proper planning and community support, expectant mothers can receive the care they need for healthy pregnancies and safe deliveries.</p>
      
      <h2>Essential Prenatal Visits</h2>
      <p>Regular check-ups during pregnancy are crucial for monitoring both maternal and fetal health. Key components include:</p>
      <ul>
        <li>Regular blood pressure and weight monitoring</li>
        <li>Blood tests to check for anemia and infections</li>
        <li>Ultrasound examinations when available</li>
        <li>Nutritional counseling and supplementation</li>
        <li>Immunizations and preventive treatments</li>
      </ul>
      
      <h2>Community Health Workers</h2>
      <p>In areas with limited access to healthcare facilities, trained community health workers play a vital role in providing basic prenatal care and education. They can help identify high-risk pregnancies and facilitate referrals to appropriate medical facilities.</p>
      
      <h2>Traditional Birth Attendants</h2>
      <p>While skilled birth attendance is ideal, traditional birth attendants remain important in many communities. Training programs that combine traditional knowledge with modern safe delivery practices can improve outcomes.</p>
      
      <h2>Emergency Preparedness</h2>
      <p>Every pregnant woman should have an emergency plan that includes transportation to the nearest health facility and funds for emergency medical care. Community emergency funds and transportation systems can be life-saving.</p>
    `
  },
  {
    id: 3,
    category: "Nutrition",
    title: "Child Nutrition in Sub-Saharan Africa",
    description: "Understanding the nutritional needs of children and combating malnutrition in African communities.",
    author: "Dr. Kofi Asante",
    location: "Accra, Ghana",
    readTime: "6 min read",
    views: "1.8k views",
    language: "English",
    verified: true,
    hasAudio: true,
    publishedAt: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1470",
    recommended: true,
    content: `
      <p>Proper nutrition during childhood is fundamental for healthy growth, development, and long-term health outcomes. In Sub-Saharan Africa, addressing child malnutrition remains a critical public health priority.</p>
      
      <h2>Understanding Malnutrition</h2>
      <p>Malnutrition encompasses both undernutrition and overnutrition. In African contexts, we commonly see:</p>
      <ul>
        <li>Stunting - reduced height for age</li>
        <li>Wasting - reduced weight for height</li>
        <li>Underweight - reduced weight for age</li>
        <li>Micronutrient deficiencies</li>
      </ul>
      
      <h2>Essential Nutrients</h2>
      <p>Children require adequate amounts of proteins, carbohydrates, fats, vitamins, and minerals for proper development. Key nutrients of concern include iron, vitamin A, zinc, and protein.</p>
      
      <h2>Community-Based Solutions</h2>
      <p>Effective nutrition interventions often involve community participation, including nutrition education, promotion of local food production, and integration with healthcare services.</p>
    `
  },
  {
    id: 4,
    category: "Infectious Disease",
    title: "Understanding Malaria Prevention in Rural Communities",
    description: "A comprehensive guide to preventing malaria in rural African communities, including proven strategies and community-based interventions.",
    author: "Dr. Amina Yakubu",
    location: "WHO Africa",
    readTime: "8 min read",
    views: "12.1k views",
    language: "English",
    verified: true,
    hasAudio: true,
    publishedAt: "Dec 8, 2024",
    image: "https://images.unsplash.com/photo-1707386821500-09f8a666706b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1437",
    recommended: true,
    content: `
      <p>Malaria remains one of the leading causes of morbidity and mortality in rural African communities. However, with proper prevention strategies and community engagement, the burden of this disease can be significantly reduced.</p>
      
      <h2>Understanding Malaria Transmission</h2>
      <p>Malaria is transmitted through the bite of infected female Anopheles mosquitoes. Understanding the lifecycle of both the parasite and the vector is crucial for effective prevention:</p>
      <ul>
        <li>Mosquitoes breed in stagnant water sources</li>
        <li>Peak biting times are typically dusk and dawn</li>
        <li>Indoor residual spraying can be highly effective</li>
        <li>Personal protective measures are essential</li>
      </ul>
      
      <h2>Community-Based Prevention</h2>
      <p>Successful malaria prevention requires community-wide efforts including environmental management, use of insecticide-treated nets, and community education programs.</p>
      
      <h2>Treatment and Care</h2>
      <p>Early diagnosis and prompt treatment with effective antimalarial drugs are critical for preventing severe disease and death. Community health workers play a vital role in rural areas.</p>
    `
  },
  {
    id: 5,
    category: "First Aid",
    title: "First Aid Essentials: What Every Household Should Have",
    description: "Basic first aid techniques and emergency response procedures that can save lives.",
    author: "Juma Kisiaki",
    location: "Red Cross Africa",
    readTime: "8 min read",
    views: "9.0k views",
    language: "Kiswahili",
    verified: true,
    hasAudio: true,
    publishedAt: "Dec 5, 2024",
    image: "https://images.unsplash.com/photo-1584739555405-37e477519d5e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    recommended: false,
    content: `
      <p>Every household should be prepared to handle basic medical emergencies. Having the right knowledge and supplies can mean the difference between life and death in critical situations.</p>
      
      <h2>Essential First Aid Supplies</h2>
      <p>A well-stocked first aid kit should include:</p>
      <ul>
        <li>Bandages and gauze in various sizes</li>
        <li>Antiseptic solutions and alcohol wipes</li>
        <li>Pain relievers and fever reducers</li>
        <li>Emergency contact information</li>
        <li>Basic medical instruments (thermometer, scissors)</li>
      </ul>
      
      <h2>Basic Life-Saving Techniques</h2>
      <p>Knowledge of CPR, wound care, and how to respond to choking incidents can save lives. Regular training and practice are essential for maintaining these skills.</p>
      
      <h2>When to Seek Professional Help</h2>
      <p>Understanding the limits of first aid is crucial. Serious injuries, persistent symptoms, or signs of severe illness require immediate professional medical attention.</p>
    `
  },
  {
    id: 6,
    category: "Preventive Care",
    title: "Exercise and Cardiovascular Health",
    description: "How regular physical activity can prevent heart disease and improve overall wellness.",
    author: "Dr. Sekou Diarra",
    location: "African Health Alliance",
    readTime: "7 min read",
    views: "585 views",
    language: "English",
    verified: true,
    hasAudio: true,
    publishedAt: "Dec 3, 2024",
    image: "https://plus.unsplash.com/premium_photo-1664910952496-b8cf8780ee7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471",
    recommended: false,
    content: `
      <p>Cardiovascular disease is becoming increasingly prevalent across Africa. Regular physical activity is one of the most effective ways to prevent heart disease and maintain overall health.</p>
      
      <h2>Benefits of Regular Exercise</h2>
      <p>Regular physical activity provides numerous cardiovascular benefits:</p>
      <ul>
        <li>Strengthens the heart muscle</li>
        <li>Improves blood circulation</li>
        <li>Helps control blood pressure</li>
        <li>Reduces harmful cholesterol levels</li>
        <li>Helps maintain healthy body weight</li>
      </ul>
      
      <h2>Types of Beneficial Exercise</h2>
      <p>A combination of aerobic exercise, strength training, and flexibility work provides optimal cardiovascular benefits. Even moderate activity like brisk walking can make a significant difference.</p>
      
      <h2>Getting Started Safely</h2>
      <p>For those new to exercise or with existing health conditions, it's important to start slowly and consult with healthcare providers before beginning an exercise program.</p>
    `
  }
];