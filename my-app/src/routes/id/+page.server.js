export async function load({url, params}) {
    console.log(params);

    const member= await fetch ('https://fdnd.directus.app/items/person/'+ params.id')
    const memberData = await memberResponse.json();

return {member: membersData.data}
}