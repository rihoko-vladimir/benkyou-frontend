class Card {
    id;
    name;
    description;
    author;
    kanjiList;

    constructor(id, name, description, author, kanjiList) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.author = author;
        this.kanjiList = kanjiList;
    }
}

export default Card;