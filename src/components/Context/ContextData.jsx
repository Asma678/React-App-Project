import React, { createContext, useState } from "react"
export const ContextData = createContext()

export const ArticleData = (props) => {
  let articleData = [
    {
      src: "https://www.bollywoodhungama.com/wp-content/uploads/2020/02/Doctor-G-banner.jpeg",
      title: "Bollywood gossip",
      readTime: "2 min read",
      description: `Doctor G is the story of a reluctant gynaecologist. Uday Gupta (Ayushmann Khurrana) is a medical student who lives in Bhopal with her mother Shobha (Sheeba Chadha). His best friend is Chaddi (Abhay Mishra) who is also his tenant. Thanks to Uday's low marks, he's not able to get into his favourite stream, that is, orthopaedics. He's asked to opt for gynaecology. His orthopaedic cousin Ashok (Indraneil Sengupta), who's also his role model, asks him to take up gynaecology and keep trying to get a better rank next year so that he can try for orthopaedics again. Uday begins his course and he's the only male in his batch. He gets into a tiff with his batchmates and the head of the department, Dr. Nandini Srivastava (Shefali Shah) who detests him for not being passionate about the course. Hence, his life is hell. Also, his girlfriend Richa breaks up with him after she complains that he’s too possessive and also that he doesn’t understand women. Meanwhile, he slowly gets interested in the course and becomes a close friend of Fatima (Rakul Preet Singh), who is also in the same batch. During a medical camp, both end up kissing each other. Later, Fatima regrets her action as she’s getting married to Arif (Paresh Pahuja). She tries explaining to Uday that they should remain friends and that they can’t get into a relationship. But due to Uday’s immaturity and his misogynistic attitude, he fails to understand Fatima’s point of view. What happens next forms the rest of the film.`,
      id: 1,
      clap: 10,
    },
    {
      src: "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/10/Allu-Arjun-starrer-Pushpa-2-to-have-a-Bollywood-A-lister-and-bigger-budget-1.jpg",
      alt: "valley",
      title: "Bollywood gossip",
      readTime: "7 min read",
      description: `Allu Arjun’s pan-India blockbuster Pushpa 2 - The Rise has whetted the Telugu superstar’s appetite for a wider spectrum of viewership. The Pushpa sequel would not only have far superior production values than the first film, the sequel’s budget is almost twice, what it was for the first film. One now hears of a Bollywood A-lister joining Allu Arjun in the cast. A source from Hyderabad informs me, “There were rumours of one Bollywood actor (Arjun Kapoor) playing the villain in Pushpa 2. This was a baseless promotional idle talk. Fahadh Faasil is the arch villain in the sequel to Pushpa. But yes, one major Bollywood A-lister will join Allu Arjun in Pushpa 2.`,
      id: 2,
      clap: 1,
    },
    {
      src: "https://media2.bollywoodhungama.in/wp-content/uploads/2022/10/Katrina-Kaif-looks-radiant-as-she-celebrates-first-Karva-Chauth-with-Vicky-Kaushal-see-photos-1.jpg",
      alt: "valley",
      title: "Bollywood gossip",
      readTime: "7 min read",
      description: `Katrina Kaif and Vicky Kaushal tied the knot last year in December in an intimate wedding in Rajasthan. They dated privately for a couple of years before getting married. In a recent interview with Pinkvilla, Katrina said, On the work front, Katrina Kaif will next star in Sriram Raghavan’s Merry Christmas with Vijay Sethupathi. Her next release in theatres is PhoneBhoot with Siddhant Chaturvedi and Ishaan Khatter. She also has Tiger 3 with Salman Khan slated for April 2023 release. The actress has also signed Farhan Akhtar’s next Jee Le Zaraa with Alia Bhatt and Priyanka Chopra.`,
      id: 3,
      clap: 1,
    },
    {
      src: "https://stat2.bollywoodhungama.in/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-14-at-12.04.32-PM.jpeg",
      alt: "valley",
      title: "Bollywood gossip",
      readTime: "7 min read",
      description: `Nargis Fakhri recalls being too “authentic and honest”; says, “You have to put on a game face” Nargis Fakri made her debut in 2011 and was last seen in 2020 released Torbaaz. ByBollywood Hungama News Network -October 14, 2022 - 12:34 PM ISTBollywood actress Nargis Fakhri caught the attention of many since her debut with Rockstar. Her innocent and bubbly character in the Ranbir Kapoor starrer left a positive impression on the audience. Though she was a part of some of the big projects of Bollywood, she shifted back to the US.However, the Housefull 3 actress is now all set to make her comeback in the film industry. While her fans are eagerly waiting for the announcement or any update about her comeback, she recently revealed that she was too authentic and honest during the early days of her career. `,
      id: 4,
      clap: 1,
    },
    {
      src: "https://stat1.bollywoodhungama.in/wp-content/uploads/2022/10/WhatsApp-Image-2022-10-14-at-1.18.51-PM.jpeg",
      alt: "valley",
      title: "Bollywood gossip",
      readTime: "10 min read",
      description:
        "  Bigg Boss 16 Weekend Ka Vaar: Sumbul Touqeer is “too pure-hearted,” says her father; schools Shalin Bhanot   In the upcoming Weekend Ka Vaar episode, Bigg Boss 16 contestant Sumbul Touqueer’s father will share wisdom with her while slamming Shalin Bhanot.  ByBollywood Hungama News Network -October 14, 2022 - 1:23 PM IST The audience and fans eagerly wait for the Weekend Ka Vaar episodes of Bigg Boss. On weekend special episodes, host Salman Khan graces the stage to announce the elimination while also guiding the contestant in their game. Talking about the upcoming Weekend Ka Vaar episode, contestant Sumbul Touqeer’s father will be coming to share his wisdom.In one of the latest promos shared by the channel, the Imli actress's father says, ‘Sumbul, jitni pure-hearted tum hona ussey mai dar gaya hu. Dekh lo duniya kaisi hai (I am scared by your pure-hearted nature, which is too much. Now you know how people are). Later, he talked to Shalin.  ",
      id: 5,
      clap: 1,
    },
    {
      src: "https://otakukart.com/wp-content/uploads/2021/03/Legend-of-the-Blue-Featured.jpg",
      alt: "poster",
      title: "Legend of blue sea",
      details:
        "The Legend of the Blue Sea (Korean : 푸른 바다의 전설; RR : Pureun Badaui Jeonseol) is a 2016–2017 South Korean television series starring Jun Ji-hyun and Lee Min-ho. Inspired by a classic Joseon legend from Korea's first collection of unofficial historical tales about a fisherman who captures and releases a mermaid, this drama tells the love story of a con-artist and a mermaid who travels across the ocean to find him.",
      info: "K-Drama",
      date: "November 16 2016",
      tags: "Netflix",
      author: "Park Ji-Eun",
      readTime: "6 min read",
      description: `Inspired by a classic Joseon legend from Korea's first collection of unofficial historical tales about a fisherman who captures and releases a mermaid,[1] this drama tells the love story of two incarnations of a man — the son of a noble Joseon family and a modern-day con artist — and a mermaid.

      This drama served as a reunion for Lee Min-ho and Kim Sung-ryung, who had a son and mother relationship on The Heirs, for Lee Ji-hoon and for Shin Hye-sun who debuted together in the School 2013, as well as Jun Ji-hyun, Hong Jin-kyung, and Na Young-hee who previously worked together in My Love from the Star.`,
      id: 6,
      clap: 1,
    },
    {
      src: "https://s-cdn.serienjunkies.de/all-of-us-are-dead/hdtv.jpg",
      alt: "poster",
      title: "All of us are dead",
      details:
        "Action, Drama, Fantasy,...A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out or turn into one of the rabid infected.",
      info: "K-Drama",
      date: "2022-01-28",
      tags: "Netflix",
      author: "Lee Jae-kyoo",
      readTime: "6 min read",
      description: `All of Us Are Dead (Korean: 지금 우리 학교는) is a South Korean coming-of-age[2] zombie apocalypse horror streaming television series. It stars Park Ji-hu, Yoon Chan-young, Cho Yi-hyun, Lomon, Yoo In-soo, Lee Yoo-mi, Kim Byung-chul, Lee Kyu-hyung, and Jeon Bae-soo. The series mostly takes place at a high school in South Korea as a zombie apocalypse suddenly breaks out and threatens the safety of the students. It is based on the Naver webtoon of the same time by Joo Dong-geun, which was published between 2009 and 2011. This series was filmed at Sunghee Girls' High School in Andong, South Korea.

      The series was released on January 28, 2022, on Netflix. Following its release, the series was watched over 474.26 million hours in its first 30 days on the service. On June 6, 2022, the series was renewed for a second season..`,
      id: 7,
      clap: 1,
    },
    {
      src: "https://ticketleap-media-master.s3.amazonaws.com/b09ddf6a-d666-41d8-8941-2f30cc77d569/hero.jpg",
      alt: "poster",
      title: "Games of thrones",
      details:
        "Ajay Devgn On How Bollywood Needs To Up Its Game: The Numbers In The South Are Really Huge",
      info: "Bollywood / April 25 2022",
      date: "sep 29 2022",
      tags: "Cinema",
      author: "Swikriti Srivastava",
      readTime: "7 min read",
      description: `Ever since films like Pushpa: The Rise, RRR and KGF: Chapter 2 set the box office on fire, many netizens took to Twitter to laud the directors from the South belt of the country. While some lauded them, others criticised Bollywood filmmakers for not bringing anything new to the table. 
      In his recent tete-a-tete with a leading daily, when actor Ajay Devgn was asked to share his opinion on the ongoing north vs south debate, here's what the actor said...

      He said that it boils down to the numbers, and the numbers in the south are really huge. "If you were to analyse it - look at the number of theatres across north centres as compared to the South markets. Their reach (South) is a lot more. We know of probably four films from the South which have worked, but there are several that have also not done as well. What also works for them is that they manage to promote their films better as there is a lot of unity there, and unity in every way," added Devgn. He went on to add, "Even the stars there are unified, from what I have seen as an outsider and my interactions with them. They are united, and they work as one force, not for a particular film, but for the industry."

      Recently, Ajay Devgn featured in SS Rajamouli's blockbuster RRR, which also starred Ram Charan and Jr NTR in the lead roles. Even though Ajay and Alia Bhatt had special appearances in the film, they were praised immensely for their screen presence. With respect to work, Ajay is currently gearing up for the release of Runway 34, which is slated to be released on April 29, 2022.
     `,
      id: 8,
      clap: 1,
    },
    {
      src: "https://images.indianexpress.com/2022/04/Nawazuddin-Siddiqui-1200by667.jpg",
      alt: "poster",
      title:"My downfall will begin the day I start taking audience for granted",
      details: `Nawazuddin Siddiqui said commercial films are a great tool to "break the pattern" that one might fall into as an actor and credited them for always opening up a newer world for him.`,
      info: "Bollywood / April 25 2022",
      date: "sep 29 2022",
      tags: "Cinema",
      author: "PTI",
      readTime: "3 min read",
      description: `Actor Nawazuddin Siddiqui believes reinventing as a performer is the only way to not become “jaded” in the film industry. In his career of more than two decades, Siddiqui has received acclaim in almost every film — from his early breakout roles in Black Friday, and Kahaani to films which were riding on his shoulder like Gangs of Wasseypur, Badlapur and Photograph.

      The actor said he never takes his audience for granted and hence his attempt is always to look for “something more” when a character comes his way.
      
      “It is on you if you’re making your character challenging enough. If you’re doing that, means you’re still curious. It is an ongoing process. The day I stop the process thinking that the audience will love me anyway as I am a great actor, my downfall will begin.
      “Here, you can get too comfortable with the praise that comes your way, it can make you feel jaded. If I take that love, the audience for granted, I am finished,” the 47-year-old told PTI.

      Citing a cricket analogy, Siddiqui said just because a cricketer has hit a century in his last match, doesn’t mean he gets to start his next from 100. “He also starts from zero. That’s how acting is. Every film of mine, be it the big screen masala entertainers or so-called artistic films, my process remains the same: I always start from the scratch. I unlearn and then go into any project. That’s what keeps me on my toes and makes me be more receptive to challenges.”

      The actor is currently awaiting the release of his next, Heropanti 2. The actioner, headlined by Tiger Shroff, is among those projects that feels like a departure from the Siddiqui brand of movies, which are often mounted on a smaller scale but almost always guarantee a thought provoking cinematic experience.`,
      id: 9,
      clap: 1,
    },
    {
      src: "https://cdn.thehollywoodgossip.com/uploads/2022/10/merican-Idol-Willie-Spence-Dead-at-23-Katharine-McPhee-Reacts-768x960.webp",
      alt: "poster",
      title: "Willie Spence, Former American Idol Runner-Up, Dead at 23’",
      details:
        "rest in peace",
      info: "Hollywood",
      tags: "singer",
      readTime: "7 min read",
      description: `Tragedy has struck the world of reality television. Willie Spence, the runner-up on Season 19 of American Idol, passed away on October 11 due to injuries he sustained in a car accident. He was 23 years old. A native of Douglas, Georgia, Spence died “in an automobile accident in Tennessee,” local news outlet Douglas Now reported on Tuesday, October 11. It continued as follows:“We have no further details at this time. We extend our condolences to Willie’s family, friends, and fans. He was an extraordinary talent and a ray of light to millions across the world.“He will be missed..`,
      id: 10,
      clap: 1,
    },
    {
      src: "https://hollywoodlife.com/wp-content/uploads/2021/05/johnny-depp-18.jpg?w=680",
      alt: "poster",
      title: "Hollywood",
      readTime: "7 min read",
      description: `Johnny Depp’s career changed in 2003. Not only did he enter his 40s, but he first portrayed a character that would turn him into a global box office sensation: Captain Jack Sparrow, seen here in ‘Pirates of the Caribbean: The Curse Of The Black Pearl.’ The series would spawn four sequels, with a rumored sixth film on the way.Johnny Depp is sporting a new look! The Pirates of the Caribbean actor, 59, was seen stepping out with a clean-shaven look this week. Johnny was nearly unrecognizable with a completely shaved chin, as he had sheared off his goatee and all facial hair for the New York City outing on Wednesday, October 12. He wore blue tinted sunglasses and a matching newsboy cap and drew his hands together in his signature “praying” gesture as he smiled for photographers. The Sleepy Hollow star, who won millions in his defamation suit against ex-wife Amber Heard, 36, in June, also rocked jeans, black shoes, and a casual leather bomber jacket with a checkered scarf. He finished his look with several chunky rings and heavy bracelets.."
    `,
      id: 11,
      clap: 1,
    },
    {
      src: "https://i.ytimg.com/vi/CATLGBN-lb8/maxresdefault.jpg",
      alt: "poster",
      title: "latest Technology",
      info: "Technology / April 25 2022",
      date: "sep 29 2022",
      tags: "Technology",
      description: `An exoskeleton boot that lets you walk faster while using less energy could help older people or those with disabilities move around.Existing exoskeletons have failed to make the step into the real world because they need to be fine-tuned to a person’s gait over long periods. Without such personalisation, the hardware may provide only a minimal boost or even make walking harder. “Despite all the things you see in the comic books and superhero movies, exoskeletons are really, really tricky,” says Steve Collins at Stanford University in California.  Collins and his colleagues have previously found tailoring an exoskeleton to an individual to be a lengthy task. The wearer had to visit the lab for five consecutive days and walk on a treadmill for 2 hours each day while wearing an uncomfortable respirator and sensors so that the content of the air they breathed in and out, and therefore their metabolic effort, could be measured`,
      id: 12,
      clap: 1,
    },
    {
      src: "https://i.ytimg.com/vi/CATLGBN-lb8/maxresdefault.jpg",
      alt: "poster",
      title: "latest Technology",
      info: "Technology / April 25 2022",
      date: "sep 29 2022",
      tags: "Technology",
      description: `An exoskeleton boot that lets you walk faster while using less energy could help older people or those with disabilities move around.Existing exoskeletons have failed to make the step into the real world because they need to be fine-tuned to a person’s gait over long periods. Without such personalisation, the hardware may provide only a minimal boost or even make walking harder. “Despite all the things you see in the comic books and superhero movies, exoskeletons are really, really tricky,” says Steve Collins at Stanford University in California.  Collins and his colleagues have previously found tailoring an exoskeleton to an individual to be a lengthy task. The wearer had to visit the lab for five consecutive days and walk on a treadmill for 2 hours each day while wearing an uncomfortable respirator and sensors so that the content of the air they breathed in and out, and therefore their metabolic effort, could be measured.`,
      id: 13,
      clap: 1,
    },
    {
      src: "https://www.cambridgeenglish.org/Images/laptop-large.jpg",
      alt: "poster",
      title: "latest Technology",
      info: "Technology / April 25 2022",
      date: "sep 29 2022",
      tags: "Technology",
      description: `Millions of learners and global Recognising Organisations are using our online Results Services. Registrations continue to boom for both websites – Results Service for Candidates and the Results Verification Service for Recognising Organisations – as they become the most convenient and secure way to share and verify Cambridge English results.In this blog you can find out everything you need to know about our latest updates and why you may want to sign up if you haven’t already`,
      id: 14,
      clap: 1,
    },
    {
      src: "https://images.newscientist.com/wp-content/uploads/2022/10/07162847/SEI_128476198.jpg?width=800",
      alt: "poster",
      title: "latest Technology",
      info: "Technology / April 25 2022",
      date: "April 25 2022",
      tags: "Technology",
      description: `A group of robotics companies including Boston Dynamics has pledged not to add weapons to their devices and to push back against attempts by other people to do so. But how big an effect will it have if other firms will be developing robots with military applications? An open letter signed by Agility Robotics, ANYbotics, Boston Dynamics, Clearpath Robotics, Open Robotics and Unitree says that “untrustworthy people” could use the companies’ devices to “invade civil rights or to threaten, harm, or ….`,
      id: 15,
      clap: 1,
    },
    {
      src: "https://images.newscientist.com/wp-content/uploads/2022/10/07151848/SEI_128475358.jpg?width=800",
      alt: "poster",
      title: "Latest Technology",
      date: "sep 29 2022",
      tags: "Technology",
      description: `An artificial intelligence model developed by Facebook owner Meta can generate sounds from a text prompt. AudioGen, an AI worked on by Meta and the Hebrew University of Jerusalem, turns text prompts such as “whistling with wind blowing” into an audio file that sounds like the scenario described. It is the sound-based equivalent of popular AI-based systems that generate images from text prompts, such as DALL-E or Midjourney, and that have captured the public imagination in …`,
      id: 16,
      clap: 1,
    },
    {
      src: "https://images.newscientist.com/wp-content/uploads/2022/10/12142259/SEI_129120430.jpg?width=800",
      alt: "poster",
      title: `Latest Technology`,
      tags: "Technology",
      description: `A robot can move on land and through water thanks to morphable limbs inspired by tortoises and sea turtles.  The Amphibious Robotic Turtle (ART), made by Robert Baines at Yale University and his colleagues, can adapt the shape of its limbs and its gait. On land, the legs mimic those of a tortoise to help it crawl, but in water they convert into flat flippers to swim.Biomimetic robots that borrow design cues from nature are a common area of research, such as rubber coatings …`,
      id: 17,
      clap: 1,
    },

    {
      src: "https://th.bing.com/th/id/R.bb2ea79949d30afe549d853bc1af36da?rik=hjiwRRgyV9jKVQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-3_TPadvrzr0%2fUUanxOAATgI%2fAAAAAAAAgTo%2fJjUdzsr2Vrg%2fs1600%2fGoogle%2boffice%2b1.jpg&ehk=EzgB%2f2lPHGsHnCkxFhOeDaBcJfidxFXV7sJrKcb3umk%3d&risl=&pid=ImgRaw&r=0",
      alt: "poster",
      title: "Google office",
      details:
        "Dream Office",
      info: "Travel",
      description: `Four Things That Make Google’s Offices So Googly
      I was recently explaining to someone why I started Office Snapshots – and my answer was that I had seen a few images of a Google office and wondered if other places like it existed, and if they could be seen on the internet. I quickly found out that other great offices existed, but there was no good place to check them out online.
      
      All that said, that conversation got me thinking about what makes a Google office so Googly that everyone is drawn to them? While there are a lot of possible answers – of which many are tied to the company culture – I tried to come up with a few that are specific to the design and features the offices contain..`,
      id: 26,
      clap: Math.floor(Math.random() * 50),
    },
    {
      src: "https://th.bing.com/th/id/OIP.Q4OE4irKeFBQRwQYdCWWTwHaJQ?pid=ImgDet&rs=1",
      alt: "poster",
      title: "Dubai United Kingdom",
      details: "Best place to visit",
      description: `Since 1982, Dubai continued to be one of the fastest growing destinations for tourists. In 2002, visitors were mainly from other Gulf Cooperation Council members which accounted for 34% of tourists, South Asia accounted for 25%, other Arab states 16%, Europe 15%, and Africa 9%. In 2003, revenue from tourism exceeded $1 billion and surpassed oil revenues to directly and indirectly account for over 17% and 28% of GDP respectively.[11]

      From January to June 2019 8.36 million international tourists visited Dubai. Most of the visitors were from India (997.000) followed by Saudi Arabia (755.000) and the United Kingdom (586,000).[12]
      
      Mastercard's Global Destination Cities Index 2019 found that tourists spend more in Dubai than in any other country. In 2018, the country topped the list for the fourth year in a row with a total spend of $30.82 billion, a 3.8% increase over 2017 ($29.70 billion). The average spend per day was $553.[13]
      
      In 2019, Dubai attracted a total of 16.73 million tourists, which was an increase of 5.09% on the previous year. However, in 2020, the number of visitors dropped to 5.51 million due to the coronavirus pandemic.[14]`,
      id: 27,
      clap: Math.floor(Math.random() * 20),
    },
    {
      src: "https://www.traveldailymedia.com/assets/2020/01/shutterstock_1535342087.jpg",
      alt: "poster",
      title: "South-Korea",
      details:
        "Wonderful Place to visit",
      description: `The South Korean government has chosen five cities as new tourism hubs in an effort to spread the tourism revenues beyond its capital city of Seoul. The cities of Busan, Gangneung, Jeonju, Mokpo and Andong will receive government subsidies to attract foreign visitors.

      Tourism Minister Park Yang-woo said the government needs to develop new regional tourism hubs to attract more foreign tourists, since about 80% of foreign tourists visit only Seoul when they visit Korea. Busan has been chosen as an international tourism city while the four cities have been picked as regional tourism hubs. The government will inject a total of SKW 15.9 billion (USD 13.5 million) for the project this year.
      
      In 2019, the number of international tourists to South Korea hit an all-time high of 17.5 million, surpassing the previous annual record of 17.24 million set in 2016.`,
      id: 28,
      clap: Math.floor(Math.random() * 10),
    },

    {
      src: "https://techcrunch.com/wp-content/uploads/2018/03/gettyimages-928059862.jpeg?w=990&crop=1",
      alt: "poster",
      title: "Microsoft Office",
      details:
        "Working place",
      tags: "Technology",
      description: `Microsoft today announced that it’s bringing a new user interface design to its Office apps like Word, Excel, PowerPoint and Outlook. This new look will be in line with the Fluent Design System the company launched last year and will roll out to both the Office.com online apps and the Office desktop tools over the course of the next few months.

      Besides the overall switch to the Fluent Design System, which is essentially Microsoft’s take on what Google is doing with Material Design, there are three major changes to the design of the Office apps.
      
      The most obvious is the redesigned and simplified Ribbon — though Microsoft is taking a very cautious approach with rolling this new feature out to all users. While it was a bit controversial when it first launched in Office 2007, most users quickly got used to the Ribbon and Microsoft quickly brought it to virtually all its Windows and online applications. With this update, Microsoft is collapsing the traditional three-row view into a single line that highlights the most important features. Users who want the traditional view can still expand the simplified Ribbon and get that full view.
    `,
      id: 29,
      clap: 1,
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1024px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
      alt: "poster",
      title: "paris",
      details:
        "Beautiful Place to visit.",
      info: "Travel",
      description: `The City of Paris is the centre of the region and province of Île-de-France, or Paris Region, with an estimated population of 12,262,544 in 2019, or about 19% of the population of France.[7] The Paris Region had a GDP of €739 billion ($743 billion) in 2019, which is the highest in Europe.[8] According to the Economist Intelligence Unit Worldwide Cost of Living Survey, in 2021, Paris was the city with the second-highest cost of living in the world, tied with Singapore, and after Tel Aviv.[9]

      Paris is a major railway, highway, and air-transport hub served by two international airports: Paris–Charles de Gaulle (the second-busiest airport in Europe) and Paris–Orly.[10][11] Opened in 1900, the city's subway system, the Paris Métro, serves 5.23 million passengers daily;[12] it is the second-busiest metro system in Europe after the Moscow Metro. Gare du Nord is the 24th-busiest railway station in the world and the busiest located outside Japan, with 262 million passengers in 2015.[13] Paris is especially known for its museums and architectural landmarks: the Louvre received 2.8 million visitors in 2021, despite the long museum closings caused by the COVID-19 virus.`,
      id: 30,
      clap: 1,
    },

    {
      src: "https://media.nutrition.org/wp-content/uploads/2020/01/protein-choices.png",
      alt: "poster",
      title: "Good Food Happy Life.",
      info: "Food",
      tags: "Food",
      description: `Effects of red meat, white meat, and nonmeat protein sources on atherogenic lipoprotein measures in the context of low compared with high saturated fat intake: a randomized controlled trial: Authors of this study tested whether levels of atherogenic lipids and lipoproteins differed significantly following consumption of diets with high red meat content compared with diets with similar amounts of protein derived from white meat or nonmeat sources, and whether these effects were modified by concomitant intake of high compared with low saturated fatty acids..`,
      id: 31,
      clap: 1,
    },
    {
      src: "https://media.nutrition.org/wp-content/uploads/2020/01/keto-diet.png",
      alt: "poster",
      title: "Good Food Happy Life",
      date: "April 25 2022",
      tags: "Food",
      readTime: "5 min read",
      description: `The Ketogenic Diet: Evidence for Optimism but High-Quality Research Needed: The author of the article says that “Based on available evidence, a well-formulated ketogenic diet does not appear to have major safety concerns for the general public and can be considered a first-line approach for obesity and diabetes. High-quality clinical trials of ketogenic diets will be needed to assess important questions about their long-term effects and full potential in clinical medicine”.`,
      id: 32,
      clap: 1,
    },
    {
      src: "https://media.nutrition.org/wp-content/uploads/2020/01/caloric-prices.png",
      alt: "poster",
      title: "Good Food Happy Life",
      readTime: "5 min read",
      description: `The Relative Caloric Prices of Healthy and Unhealthy Foods Differ Systematically across Income Levels and Continents: This study compared relative caloric prices (RCPs) for different food categories across 176 countries and ascertained their associations with dietary indicators and nutrition outcomes. The study concluded that relative food prices vary systematically across countries and partially explain international differences in the prevalences of undernutrition and overweight adults. Future research should focus on how to alter relative prices to achieve better dietary and nutrition outcomes. This article received a lot of international attention and was mentioned in 27 news outlets. Two stories reporting on this research are from Medical Xpress and Business Standard..`,
      id: 33,
      clap: 1,
    },
    {
      src: "https://media.nutrition.org/wp-content/uploads/2020/01/vitamin-k-dairy.png",
      alt: "poster",
      title: "Good Food Happy Life",
      tags: "Food",
      readTime: "5 min read",
      description: `Multiple Vitamin K Forms Exist in Dairy Foods: antified in the US diet. Menaquinones (vitamin K-2) are another class of vitamin K compounds that differ from phylloquinone in the length and saturation of their side chain, but they have not been well characterized in foods. The authors of this study conclude that, to the best of their knowledge, this is the first report of menaquinone contents of US dairy products. Findings indicate that the amount of vitamin K contents in dairy products is high and proportional to the fat content of the product..`,
      id: 35,
      clap: 1,
    },
    {
      src: "https://foodtank.com/wp-content/uploads/2022/08/Food-Tank_EAT-Lancet-2.0_alexander-schimmeck.jpg",
      alt: "poster",
      title: "Good Food Happy Life",
      tags: "Food",
      readTime: "5 min read",
      description: `The first EAT-Lancet Commission report was published in 2019. The EAT-Lancet 2.0 report will launch in 2024 and focus on diverse dietary guidelines, local diets, and food justice. In addition, the report will include 12-month long global consultations for the public and other interested global food systems stakeholders to share their thoughts on a transition to sustainable food systems, and Intergovernmental Panel on Climate Change (IPCC) modeling efforts to evaluate multiple pathways to sustainable food systems.The second EAT-Lancet Commission brings together 25 scientists from 19 countries and five continents. The Commission includes EAT, a science-based nonprofit in collaboration with the Stockholm Resilience Centre (SRC), the Potsdam Institute for Climate Impact Research (PIK), Harvard University, and One Consultive Group on International Agricultural Research (CGIAR)`,
      id: 36,
      clap: 1,
    },
  ]

  const [data, setData] = useState(articleData)
  return (
    <ContextData.Provider value={[data, setData]}>
      {props.children}
    </ContextData.Provider>
  )
}