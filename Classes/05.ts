interface Repository<T> {
  add(item: T): void;
  getAll(): T[];
  getByIndex(index: number): T | undefined;
  remove(index: number): void;
  find(predicate: (item: T) => boolean): T | undefined;
  findAll(predicate: (item: T) => boolean): T[] | undefined;
  update(index: number, newValue: T): void;
  clear(): void;
}

class MemoryRepository<T> implements Repository<T> {
  private items: T[] = [];
  
  add(item: T): void {
    this.items.push(item);
  }
  getAll(): T[] {
    return this.items;
  }
  getByIndex(index: number): T | undefined {
    return this.items[index];
  }
  remove(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }
  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }
  findAll(predicate: (item: T) => boolean): T[] {
    return this.items.filter(predicate);
  }
  update(index: number, newValue: T): void {
    if (index >= 0 && index < this.items.length) {
      this.items[index] = newValue;
    }  
  }
  clear(): void {
    this.items = [];
  }
}
