function basketballEquipment (input) {
    let yearlyMembership = Number(input[0]); 
    let shoes = yearlyMembership - (yearlyMembership * 0.40);
    let clothes = shoes - (shoes * 0.20); 
    let ball = clothes - (clothes * 0.75); 
    let accessories = ball - (ball * 0.80);
    let total = yearlyMembership + shoes + clothes + ball + accessories
    console.log (total)
}

basketballEquipment([365])