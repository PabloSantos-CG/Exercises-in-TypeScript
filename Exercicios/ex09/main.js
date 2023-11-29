class People {
    constructor(author) {
        this.author = author;
        this.like = 0;
        this.comments = [];
    }
    addLike() {
        this.like++;
        console.log("Novo Like");
    }
    addCommments(newComment) {
        this.comments.push(newComment);
        console.log("Novo comentário adicionado!");
    }
}
const NovaPessoa = new People("Guio");
const pessoa1 = { author: "Adriana", content: "Hello world" };
NovaPessoa.addCommments(pessoa1);
NovaPessoa.addCommments({ author: "Guio", content: "Hello world" });
console.log(NovaPessoa);
