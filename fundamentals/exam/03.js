function solve(input) {
    function init(phones) {
        storage = phone;
    }
    
    function add(phone, storage) {
        if (storage.indexOf(phone) < 0) {
            storage.push(phone);
        }
    }
    
    function remove(phone, storage) {
        const index = storage.indexOf(phone);
        if(index >= 0) {
            storage.splice(index, 1);
        }
    }
    
    function bonus(phone, bonusPhone, storage) {
        const index = storage.indexOf(phone);
        if(index >= 0) {
            storage.splice(index+1, 0, bonusPhone);
        }
    }
    
    function last(phone, storage) {
        remove(phone, storage);
        add(phone, storage);
    }
    function process(input) {
        const storage = input.shift().split(", ");
        for (const cmd of input) {
            const action = cmd.split(' - ');
            switch (action[0]) {
                case "Add":
                    add(action[1], storage);
                break;
                case "Remove":
                    remove(action[1], storage);
                break;
                case "Bonus phone":
                    const params = action[1].split(":");
                    bonus(params[0], params[1], storage);
                break;
                case "Last":
                    last(action[1], storage);
                break;
                case "End":
                    return storage;
            }
        }
    }
    console.log(process(input).join(", "))
}

solve(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"])

solve(["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"])

solve(["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"])