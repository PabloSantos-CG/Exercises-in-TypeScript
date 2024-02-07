const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];


//retorna true se a última letra da string for 'm'
function personIsSeller(name) {
  return name[name.length - 1] === "m";
}


function search(name) {
  let search_queue = [];
  const searched = [];

  search_queue = search_queue.concat(graph[name]);

  while (search_queue.length) {
    //person representa a primeiro elemento do array que acabou de ser retirado
    let person = search_queue.shift();
    
    //se o elemento nao estiver no array retorna -1 entao cai dentro do if da linha 28
    if (searched.indexOf(person) === -1) {

      if (personIsSeller(person)) {
        console.log(person + " is a mango seller!");
        return true;
      }

      //se houver algum valor ou seja array relacionado com a chave 'person' do objeto graph
      //ele vai adicionar no final de search_queue
      search_queue = search_queue.concat(graph[person]);
      
      //searched representa a lista dos já verificados
      searched.push(person);
    }
  }
  return false;
}

search("you"); // thom is a mango seller!