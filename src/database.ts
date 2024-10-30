import { faker } from '@faker-js/faker';
import type { User } from './types.js';
import { delay, random } from './utils.js';

export class Database {
  private static users = new Map<string, User>();

  /**
   * Créé des utilisateurs en base de données
   * @param count le nombre d'utilisateurs à crééer
   */
  static async loadUsers(count: number) {
    for (let i = 0; i < count; i++) {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const user: User = {
        id: `${i + 1}`,
        email: faker.internet.email({ firstName, lastName }),
        firstName,
        lastName,
      };

      this.users.set(user.id, user);
    }
  }

  /**
   * Récupère l'utilisateur demandé
   */
  static async getUser(id: string): Promise<User | null> {
    return this.users.get(id) ?? null;
  }

  /**
   * Récupère la liste de tous les utilisateurs
   * // TODO trier par nom alphabetique
   */
  static async getUsers() {
    return Array.from(this.users.values());
  }

  /**
   * Met à jour l'utilisateur avec les données envoyées
   * // TODO: faire en sorte qu'on ne puisse pas modifier l'id d'un utilisateur
   */
  static async updateUser(id: string, data: Partial<User>) {
    const user = this.users.get(id);

    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    
    Object.entries(data).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      } else {
        user[key as keyof User] = value;
      }
    });
  
    return user;
  }

  static async searchByEmail(email: string) {
    // Simule un délai d'environ 2 secondes sur la database
    // C'est artificiel pour les besoins de l'exercice, ne pas supprimer cette ligne !!
    // (petit.e tricheur.euse va :P)
    await delay(random(1, 2) * 1000);

    const users = await this.getUsers();
    return users.find((user) => (user.email = email)) ?? null;
  }
}
