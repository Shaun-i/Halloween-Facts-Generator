var facts = [
    "Tradition says, if you bite into a Halloween cake and hit a thimble, you'll be unlucky in love.",
    "The first Jack O’Lanterns were actually made from turnips.",
    "Ireland is typically believed to be the birthplace of Halloween.",
    "The famous magician Harry Houdini died on October 31, 1926.",
    "In many countries, such as France and Australia, Halloween is (sadly) seen as an unwanted and overly commercial American influence.",
    "Boston, Massachusetts, holds the record for the most Jack O’Lanterns lit at once (30,128).",
    "In Bellville, Missouri, it is illegal to ask for candy if you are over the age of 13.",
    "If you’d been around for the earliest Halloween celebrations, you might have worn animal skins and heads.",
    "Some animal shelters won’t allow the adoption of black cats around Halloween for fear they’ll be sacrificed.",
    "Samhainophobia is the medical term for a pathological fear of Halloween.",
    "The word 'witch' actually comes from an old English word that means 'wise woman.'",
    "Legend has it that if you see a spider on Halloween night, it means a loved one is watching over you.",
    "According to legend, if you put your clothes on inside out and walk backward at Halloween, you’ll see a witch at midnight.",
    "In the 1940s, trick or treating was halted because war-time rationing had curtailed the use of sugar.",
    "Halloween is traditionally associated with the colors orange and black: orange because of its link to the fall harvest, and black because of its connection to darkness and death.",
    "A lot of old Halloween traditions revolved around trying to find a match for young single women.",
    "There have been several cases of people ignoring actual dead bodies because they mistook them for Halloween decorations.",
    "Manitou Springs Colorado holds a race every Halloween where teams of competitors push coffins down the street.",
    "In Japan, the Yakuza crime syndicate organizes a children’s Halloween event every year. They canceled it in 2015 because there were fears about a gang war breaking out.",
    "Parents’ fears about strangers giving their children poisoned Halloween candy are based on a myth as police have never documented any actual cases. However, there have been several instances of parents poisoning their own children’s candy and then claiming a stranger did it.",
    "In the 1980s, Stephen King used to host a haunted house at his home every Halloween. But he canceled the annual event after 1,400 people showed up one year.",
    "In 2015, Airbnb held a contest where the winner got to spend Halloween night in the Paris catacombs that hold the remains of about six million people.",
    "On Halloween 1992, the BBC aired a “mockumentary” called Ghostwatch. The pre-taped show was presented as if it were a live broadcast. It showed reporters visiting an ordinary household in North London that was apparently haunted by a poltergeist. The show was convincing enough that two young viewers exhibited some symptoms of post-traumatic stress disorder. Another viewer committed suicide because he thought his house was haunted.",
    "Americans now spend over $350 million a year on halloween costumes.",
    "20 million Halloween cards are sent out each year.",
    "When the movie trailer for The Exorcist was shown to the public in theaters, it was reportedly so scary that people ran out of the room.",
    "In Philadelphia, The Mutter Museum is filled with fascinating and disgusting bits of human anatomy that have been preserved. Mutations, tumors, and medical anomalies are on full display.",
    "Back in the 1960s, the skeletons in the Pirates of the Caribbean ride at Disneyland were real. At the time, they thought that fake skeletons didn’t look scary enough."
]

function newFact() {
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById("fact_display").innerHTML = facts[randomNumber];
}