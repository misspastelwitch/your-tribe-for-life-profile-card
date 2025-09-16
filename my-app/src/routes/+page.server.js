export async function load({URL}) {
    const members= await fetch ('https://fdnd.directus.app/items/squad/?fields=persons.*.*&filter[cohort][_eq]=2526')
    const membersData = await membersResponse.json();

return {memers: membersData.data}
}
