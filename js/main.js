//about - loading random content in text box on load & onclick, refreshing page to show new random content
var facts = [
  "BoJack was born on January 2, 1964 in San Francisco, CA and grew up in a dysfunctional family. His mother was a housewife and the heiress of the Sugarman Sugarcube Fortune, while his father was a failed novelist from a working-class background.",
  "BoJack worked as a standup comic before landing a role as a main character on a hit television sitcom. He let his fame go to his head and it made him more and more depressed, bitter and cynical.",
  "BoJack is 6 feet 7 inches tall and weighs 1,200 pounds. He is a male grade thoroughbred cross horse. He has brown fur and a black mane, with a white snippet on his snout that begins at his upper lip and ends underneath his eyes.",
  "BoJack was not only an actor, but he was also a drama professor at Wesleyan University, owner of Restaurant Elephante and amateur standup comedian.",
  "Despite these struggles and insecurities that he has, BoJack really does care about others, such as his friends, can even be insightful, doesn't really want to hurt anybody and has proven to be more tender-hearted than he appears to be.",
  "BoJack looked up to Secretariat as a child and he finally got the chance to act as Secretariat in a movie later on in his career. He was given the opportunity due to the attention he got from his book 'One Trick Pony'.",
  "During his twenties-early thirties, he was much slimmer and he had a longer, thicker mane that somewhat resembled a mullet. His fur also appeared lighter in color.",
  "A curmudgeon described by his ex-girlfriend as a 'self-pitying masochist,' BoJack Horseman is bitter, depressed, self-loathing, narcissistic, and sometimes self-destructive."
];

var rand_integer = Math.floor(Math.random() * facts.length);

window.addEventListener("load",
  function () {
    document.getElementById("facts").innerHTML = facts[rand_integer];
  }, false
);

document.getElementById("learn-more").addEventListener("click",
  function () {
    window.location.reload();
  }, false
);
