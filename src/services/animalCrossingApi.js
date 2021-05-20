//https://ac-vill.herokuapp.com/villagers

export const fetchVillagers = async () => {
   const res = await fetch('//https://ac-vill.herokuapp.com/villagers');
   const villagers = await res.json();

   return villagers.map(villager => ({
      name: villager.name
   }))
}



//https://ac-vill.herokuapp.com/villagers/:id