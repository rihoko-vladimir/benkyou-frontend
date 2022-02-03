class Card {
    id;
    name;
    description;
    author;
    authorId;
    kanjiList;


    constructor(id, authorId, name, description, author, kanjiList) {
        this.id = id;
        this.authorId = authorId;
        this.name = name;
        this.description = description;
        this.author = author;
        this.kanjiList = kanjiList;
    }
}

export default Card;