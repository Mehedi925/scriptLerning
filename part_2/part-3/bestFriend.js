function bestFriend(friends){
    let BigNameFriend = friends[0];
    for(const friend of friends){
        // console.log(friend.length);
        if(friend.length > BigNameFriend.length){
            BigNameFriend = friend;
        }
    }
    return BigNameFriend;
}
let friends = ['MitulHasanRidoy','Sajjad','Rafat','MitulHasan','Ringku','Rajib','MirzaJalal'];
const result = bestFriend(friends);
console.log(result);