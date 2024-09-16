import { createDirectus, rest, authentication } from '@directus/sdk';
//import { readItems, readItem, updateItem, updateUser, createItem, deleteItem } from '@directus/sdk';

export function getDirectusInstance(fetch) {
  const options = fetch ? { globals: { fetch } } : {};
  const directus = createDirectus(import.meta.env.VITE_DIRECTUS_URL ).with(authentication()).with(rest());
	return directus;
}



export default getDirectusInstance;
