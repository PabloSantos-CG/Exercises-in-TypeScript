type typeComment = {
  author: string;
  content: string;
};

class People {
  public like = 0;
  public comments = [];

  constructor(public author: string) {}

  addLike() {
    this.like++;
    console.log("Novo Like");
  }

  addCommments(newComment: typeComment) {
    this.comments.push(newComment);
    console.log("Novo comentário adicionado!");
  }
}

const NovaPessoa = new People("Guio");
const pessoa1 = { author: "Adriana", content: "Hello world" };

NovaPessoa.addCommments(pessoa1);
NovaPessoa.addCommments({ author: "Guio", content: "Hello world" });


NovaPessoa.addLike()
console.log(NovaPessoa);
