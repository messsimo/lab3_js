/**
 * Класс для представления предмета в инвентаре.
 */
class Item {
    /**
     * Конструктор для создания предмета.
     * @param {string} name - Название предмета.
     * @param {number} weight - Вес предмета.
     * @param {string} rarity - Редкость предмета (common, uncommon, rare, legendary).
     */
    constructor(name, weight, rarity) {
      this.name = name;
      this.weight = weight;
      this.rarity = rarity;
    }
  
    /**
     * Возвращает строку с информацией о предмете.
     * @returns {string} Информация о предмете.
     */
    getInfo() {
      return `${this.name}, Weight: ${this.weight}kg, Rarity: ${this.rarity}`;
    }
  
    /**
     * Устанавливает новый вес для предмета.
     * @param {number} newWeight - Новый вес предмета.
     */
    setWeight(newWeight) {
      this.weight = newWeight;
    }
  }
  
  /**
   * Класс для представления оружия, расширяет Item.
   */
  class Weapon extends Item {
    /**
     * Конструктор для создания оружия.
     * @param {string} name - Название оружия.
     * @param {number} weight - Вес оружия.
     * @param {string} rarity - Редкость оружия (common, uncommon, rare, legendary).
     * @param {number} damage - Урон оружия.
     * @param {number} durability - Прочность оружия.
     */
    constructor(name, weight, rarity, damage, durability) {
      super(name, weight, rarity);
      this.damage = damage;
      this.durability = durability;
    }
  
    /**
     * Использует оружие, снижая его прочность на 10 (если прочность > 0).
     */
    use() {
      if (this.durability > 0) {
        this.durability -= 10;
      }
    }
  
    /**
     * Ремонтирует оружие, восстанавливая его прочность до 100.
     */
    repair() {
      this.durability = 100;
    }
  }
  
  // Пример использования:
  const sword = new Item("Steel Sword", 3.5, "rare");
  console.log(sword.getInfo());
  sword.setWeight(4.0);
  
  const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
  console.log(bow.getInfo());
  bow.use();
  console.log(bow.durability); // прочность уменьшится
  bow.repair();
  console.log(bow.durability); // прочность восстановится  