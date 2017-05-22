/*
* An animal shelter, which holds only dogs and cats, operates on a strictly
* "first in first out" basis. People must adopt either the "oldest" (based
* on arrival time) of all animals at the shelter, or they can select wether
* they would prefer a dog or a cat (and will receive the oldest animal of
* that type). They cannot select which specific animal they would like.
* Create the data structures to maintain this system and implement operations
* such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the
* built-in LinkedList data structure.
*/

class AnimalShelter {
  constructor() {
    this.queue = [];
  }

  enqueue(animal) {
    this.queue.push(animal);
  }

  dequeue(type) {
    let animal;

    if (type) {
      const cache = [];

      while (!animal) {
        animal = this.queue.shift(animal) || null;

        if (animal.type === type) {
          this.queue = cache.concat(this.queue);
        } else {
          cache.push(animal);
          animal = null;
        }
      }
    } else {
      animal = this.queue.shift(animal) || null;
    }

    return animal;
  }

  dequeueDog() {
    return this.dequeue('dog');
  }

  dequeueCat() {
    return this.dequeue('cat');
  }
}

/* TESTS */
const animalShelter = new AnimalShelter();
animalShelter.enqueue({ type: 'cat', name: 'cat1' });
animalShelter.enqueue({ type: 'cat', name: 'cat2' });
animalShelter.enqueue({ type: 'dog', name: 'dog1' });
animalShelter.enqueue({ type: 'cat', name: 'cat3' });
console.log(animalShelter.dequeue());
console.log(animalShelter.dequeueDog());
console.log(animalShelter.dequeue());
console.log(animalShelter.dequeueCat());
console.log(animalShelter.dequeue());
