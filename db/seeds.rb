# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

comment_list = [
     "It's a great day in Singapore!",
     "I wanna see Mr Lee Hsien Loong",
    "We beat Malaysia!",
    "Roti prata jiak pa pa",
    "Hand itchy",
    "Got sleep anot?" ,
    "Tummy ache",
    "Why exam never end",
    "Hey my teeth falling out" ,
    "Aiya teacher dunno also",
    "How come liddat",
    "Let's have a great time!" ,
     "Baseball team fun leh",
     "Failed exam who cares",
     "Let's have a look at your hair" ,
     "My armpit itchy",
     "Backside pain apply what?",
     "Dunno why he so old but still like monkey" ,
     "#Jackson friday",
     "It's the fireworks that making me crazy",
     "I listened to the radio and fell asleep",
     "Why I wish i was talyor swift",
     "She loves me she loves me not",
     "MadMax is the best movie ever made!" ,
     "Hey I got tummy but my wife still likes",
     "Aiya why so liddat huh" ,
     "Hey I pimple quite big squeeze or no squeeze",
     "Hmmmmmm?",
     "Lets drink teh tarik during national anthem" ,
     "My son go army come out drug addict. How??",

     "Woo hoo!!",
     "MRT is fast!",
     "Weather is hazy!",
     "Very hot today!",
     "Very humid today!",
     "Election is coming!",
     "SG beats Malaysia",
     "Chew on it is interesting",
     "Straits time is nice." ,
     "My dog is active today.",
     "Go NUS!",
     "Go NTU!" ,
     "Go Singapore!",
     "Stand up for Singapore!",
     "Feeling annoyed!" ,
     "Feeling sleepy!",
     "Feeling great!",
     "Haze again?" ,
     "Changi nasi lemak is good",
     "Lau pa sak good is good",
     "Weather is lousy today." ,
     "Hope MRT don't break down",
     "Bus is fast.",
     "Bus came fast.",
     "Going to bike to work",
     "Holiday today!",
     "No work today!",
     "Feeling good!",
     "Causeway is jammed!",
     "RWS is great!",

     "Universal Studio is great!",
     "River Safari is interesting!",
     "Zoo is fun!",
     "Bird park is fun!",
     "Supertree is huge!",
     "Going to casino today!",
     "Weather is bad!",
     "Jam in PIE!!",
     "Jam in CTE!!",
     "Going back to camp...",
     "Back pain!",
     "Going IPPT today",
     "Going RT today...",
     "New IPPT is good",
     "Cars are expensive",
     "HDB flat hard to get!",
     "Supertree!",
     "Singapore Zoo!",
     "Going to Sungei Beloh!",
     "Monsoon coming again!",
     "Leopard tank is great!",
     "Shooting M16 today!",
     "Going IPPT today",
     "Monsoon coming again!",
     "Weather is bad!",
     "Bird park is fun!",
     "Supertree is huge!",
     "Universal Studio is great!",
     "River Safari is interesting!",
     "Zoo is fun!",

     "food is great! cos they sprinkle MSG",
     "not very happy, but its OK" ,
     "water is not clean, califonia water heavy metals in my tummy",
     "lets go to korea and eat some bingsu" ,
     "The house price is too high! but its just a lego house",
     "school time is kind of long so i wanna grow up asap" ,
     "job market is not good tats why start a company",
     "we need more vocations!! But I have no money.",
     "The weather is nice, good for sleeping" ,
     "Travelling is convenient, because I own a jet.",
     "we are better than malaysia!! Singapore GDP = 2 Malaysia GDP",
     "The stock market looks good. Hohoho." ,
     "I feel rich, because i went to malaysia and spending power 2X",
     "hahhahaha, good mood!! That's cost i had morphine",
     "How to make my pot belly grow in a certain shape? I like an angle" ,
     "NUS is the best university for getting half past 6 education",
     "why why why why!! My wife left me with the kids. I'm suicidal",
     "we love coding and hacking, thats why I'm a robot" ,
     "Singapore food is the best, but I still prefer KFC",
     "Health insurance is getting better but i got cheated!!",
     "something need to be changed, because peeling onions are fun" ,
     "The hospital is nicer than 10 year ago",
     "sleepy sleepy sleepy, need more sleep! People say i lazy",
     "I feel happier after marriage, want 8 kids." ,
     "Why my husband come back later everyday?",
     "LV is my favorite. Louis Vuitton." ,
     "Math is so hard to understand",
     "I was programming too much i got headache",
     "Went army climb jungle, fell down pants split" ,
     "My grandfather died today. He was a great man.",

    "Movie theatre is awesome!!",
     "I like mad max" ,
     "I don't like Obama",
     "shalala noodle is yummy" ,
     "I can not beleive I am 50 now!! I've 3 wifes and 9 kids",
     "my son is too busy to visit me, because he's always playing dota" ,
     "Food price is getting more reseaonable, so time to buy more",
     "yeah, I am 18 now!!",
     "what is the meaning of life" ,
     "I want to study machine learning",
     "The tax is kind of high!!",
     "school sports activities are good" ,
     "coding is important",
     "egg tart is delicious!! ",
     "Too much homework... hire you do for me?" ,
     "It is so hard to get a taxi at rainy day..",
     "I love Uber, it is convenient yeah!! Why not lyft",
     "Education is so important so study hard ah dont listen to them" ,
     "Newspaper is getting better, because the paper is thicker these days",
     "recycling is important!! But who cares",
     "Feel proud as a Singaporean" ,
     "So hot, So hot, So hot... its singapore deh",
     "Dancing is awesome! My dance partner is so awesome!",
     "what will happen in my life? I think I will become a jedi" ,
     "I love dogs only if they are hotdogs",
     "I read 50 books this year! I love recycling book paper" ,
     "python is better than marriage",
     "How can I find a job? I'm introvert",
     "I am gaining weight now" ,
    "smile emoticon tongue emoticon :0 heart emoticon"

]


comment_list.each do |text|
  Voice.create( text: text, votes: 0 )
end