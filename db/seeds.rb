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

     "food is great!!",
     "not very happy" ,
     "water is not clean",
     "the bus is nice" ,
     "The house price is too high!!",
     "school time is kind of long" ,
     "job market is not good",
     "we need more vocations!!",
     "The weather is nice" ,
     "Travelling is convenient, like it",
     "we are better than malaysia!!",
     "The stock market looks good" ,
     "I feel rich",
     "hahhahaha, good mood!!",
     "The education need to be improved" ,
     "NUS is the best university smile emoticon",
     "why why why why!!",
     "we love coding and hacking" ,
     "Singapore food is the best",
     "Health insurance is getting better!!",
     "something need to be changed" ,
     "The hospital is nicer than 10 year ago",
     "sleepy sleepy sleepy, need more sleep!!",
     "I feel happier after marriage" ,
     "Why my husband come back later everyday?",
     "LV is my favorite" ,
     "Math is so hard to understand",
     "Dancing is fun!!",
     "I like C++ more, java is so slow" ,
     "Python is the best",

    "Movie theatre is awesome!!",
     "I like mad max" ,
     "I don't like Obama",
     "shalala noodle is yummy" ,
     "I can not beleive I am 50 now!!",
     "my son is too busy to visit me" ,
     "Food price is getting more reseaonable",
     "yeah, I am 18 now!!",
     "what is the meaning of life" ,
     "I want to study machine learning",
     "The tax is kind of high!!",
     "school sports activities are good" ,
     "coding is important",
     "egg tart is delicious!!",
     "Too much homework..." ,
     "It is so hard to get a taxi at rainy day..",
     "I love Uber, it is convenient!!",
     "Education is so important" ,
     "Newspaper is getting better",
     "recycling is important!!",
     "Feel proud as a Singaporean" ,
     "So hot, So hot, So hot...",
     "Dancing is awesome!!",
     "what will happen in my life?" ,
     "I love dogs",
     "I read 50 books this year!" ,
     "python is better than matlab",
     "How can I find a job?",
     "I am gaining weight now" ,
    "smile emoticon tongue emoticon :0 heart emoticon"

]


comment_list.each do |text|
  Voice.create( text: text, votes: 0 )
end