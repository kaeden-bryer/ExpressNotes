let notes = [
    {
        id: 1,
        title: "The Griffin",
        contents: "The tensions and atmosphere were immaculate on this day. Incredibly, this was a whole 5 months before I officially asked you out. I can’t believe you would’ve said yes if I asked this day… I wonder how our relationship would’ve changed if I did. Even though I would’ve liked to date you sooner, I also think the slow burn made our relationship more meaningful. But this really was the perfect backdrop to ask a person out wasn’t it?",
        date: Date.now()
    },
    {
        id: 2,
        title: "Suspicious Snaps",
        contents: "When we were suspiciously (and obviously) couple-like. So early on in our time together. So long before Valentines 2023. I’m sure BK and Liz were very entertained by our antics. I had at once no rizz and hella rizz for this.",
        date: Date.now()
    },
    {
        id: 3,
        title: "Savvy Sliders",
        contents: "I’m tempted to call this our first date, because this is the day I realized I wouldn’t ever get bored spending time with you. What originally started as a short lunch to Captain Jay’s turned into this elaborate journey, going from place to place with no destination in mind, but having fun at every corner. This is also one of the first times we hung out one on one together, and I wasn’t sure if we’d have things to talk about all day. I couldn’t have been more wrong. I really want to go to Savvy Sliders again, and get some tribute burgers to our past selves.",
        date: Date.now()
    },
    {
        id: 4,
        title: "Jolly Pumpkin",
        contents: '“Yo take a picture of me like I’m not looking” LMAO. This is the day we were so suspiciously dating and EVERYONE in our friend group knew it. Do you remember taking pictures in the 7/11 mirror together after dinner? I’m almost tempted to say at this point we’d already started dating, but you can tell by my hair that it’s not even close yet…',
        date: Date.now()
    },
]

function getNotes() {
    return notes;
}
exports.getNotes = getNotes

function getNote(id) {
    return notes.find((note) => note.id === id);
}
exports.getNote = getNote

function createNote(note) {
    notes.push({
        ...note,
        id: notes.length + 1,
        date: Date.now(),
    })
}
exports.createNote = createNote