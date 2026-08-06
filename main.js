let info = {};

onPlayerJoin = (id) => {
    api.configureShopCategoryForPlayer(id, "smith", {
        customTitle: "鍛造台",
        description: "選擇鍛造模板",
        sortPriority: 1400000,autoSelectCategory:true
    });
    api.configureShopCategoryForPlayer(id, "chat", {
        customTitle: "私人聊天",
        description: "你可以在這裡與他人私訊聊天，盡情享受!\n請先儲存字串再選擇玩家發送",
        sortPriority: 1210000
    });
    api.createShopItemForPlayer(id, "chat", "name", {
        image: "Lime Paintball",
        customTitle: "選擇發送目標玩家",
        buyButtonText: "選擇",
        userInput: { type: "player" }
    });
    api.createShopItemForPlayer(id, "chat", "text", {
        image: "Green Paintball",
        customTitle: "請先選擇玩家",
        buyButtonText: "發送",
        userInput: { type: "text" }
    });
        api.createShopItemForPlayer(id, "smith", "item", {
        image: "Diamond",
        customTitle: "鑽石模板",
        description: "測試",
        canBuy: true,
        buyButtonText: "鍛造",
        hidden:true
    });
    api.createShopItemForPlayer(id, "smith", "metal", {
        image: "Red Paintball",
        customTitle: "選擇模板",
        buyButtonText: "儲存",
        userInput: { type: "dropdown", dropdownOptions: ["1", "2", "3"] },
        hidden:true
    });
    info[id] = {
        chat: { id: null, name: null },
        name: api.getEntityName(id)
    };
};

function onPlayerLeave(id) {
    delete info[id];
}

onPlayerBoughtShopItem = (id, cate, item, t, input) => {
    if (cate !== "chat" && cate !== "smith") return;
    switch (item) {
        case "name":
            info[id].chat.id = input;
            input = info[input].name;
            info[id].chat.name = input;
            api.updateShopItemForPlayer(id, "chat", "text", { customTitle: `傳送訊息給${input}` });
            api.updateShopItemForPlayer(id, "chat", "name", { customTitle: `目前選擇：${input}` });
            break;
        case "text":
            const chatTo = info[id].chat.id;
            if (!chatTo) {
                api.sendOverShopInfo(id, "請先選擇玩家");
                return;
            }
            try {
                api.sendMessage(chatTo,[{str:"[私聊]",style:{color:"rgb(78,199,204)"}},{str:`${info[id].name}:`,style:{color:"rgb(203,227,237)"}},{str:input,style:{color:"rgb(128,220,240)"}}]);
                api.sendMessage(id,[{str:"[私聊]",style:{color:"rgb(78,199,204)"}},{str:`你對${info[id].chat.name}說:`,style:{color:"rgb(203,227,237)"}},{str:input,style:{color:"rgb(128,220,240)"}}]);
                api.sendOverShopInfo(id, "已發送");
            } catch (e) {
                api.sendOverShopInfo(id, "玩家不在線或是發生了某些錯誤，請重新選擇或稍後重試");
            }
            break;
    };
};

onPlayerAltAction = (id, x, y, z, block) => {
    if (block !== "Chopping Board") return;
    api.updateShopItemForPlayer(id,"smith","item",{hidden:false})
    api.updateShopItemForPlayer(id,"smith","metal",{hidden:false})  
    api.openShop(id, false, "smith");
};

onPlayerToggledShopMenu=(id,open)=>{
    if(open) return
    api.updateShopItemForPlayer(id,"smith","item",{hidden:true})
    api.updateShopItemForPlayer(id,"smith","metal",{hidden:true})
}

onPlayerSelectInventorySlot = (id, idx) => {
    if (!api.getItemSlot(id, idx)?.name.includes("Sword")) return;
    api.animateEntity(id, {
        "animation_length": 1.5,
        "bones": {
            "TorsoNode": {
                "rotation": {
                    "0.0": [0, 0, 0],
                    "0.375": [12.5, 0, 0]
                }
            },
            "ArmLeftMesh": {
                "rotation": {
                    "0.0": [0, 0, 0],
                    "0.25": [32.5, 0, 0],
                    "0.6667": [54.8973, 4.0941, -2.8728],
                    "0.7917": [52.3105, 20.2544, -14.9741],
                    "1.0": [42.5214, 25.0, -20.8597],
                    "1.25": [42.52, 25.44, -20.86]
                },
                "position": {
                    "0.0": [0, 0, 0],
                    "1.0": [0, 0, 0],
                    "1.25": [0, 0, 0]
                }
            },
            "ArmRightMesh": {
                "rotation": {
                    "0.0": [0, -180, 0],
                    "0.0417": [132.262, 9.7152, 200.5397],
                    "0.125": [162.059, 28.5363, 212.4008],
                    "0.25": [143.5994, 28.5362, 216.9409],
                    "0.4167": [115.3036, 35.963, 197.4942],
                    "0.5417": [107.0359, -4.5898, 268.4384],
                    "0.6667": [85.2007, -16.9798, 359.8429],
                    "0.7917": [65.2007, -16.9798, 359.8429],
                    "1.0": [62.9146, -28.231, 365.7572],
                    "1.25": [62.91, -28.23, 365.76]
                },
                "position": {
                    "0.0": [0, 0, 0],
                    "0.125": [1, 0, -0.5],
                    "0.25": [2, 0, -1],
                    "0.4167": [1, 0, -1],
                    "0.7917": [1, 0, 1],
                    "1.25": [1, 0, 1]
                }
            },
            "LegLeftMesh": {
                "rotation": {
                    "0.25": [0, 0, 0],
                    "0.375": [-5, 0, 0],
                    "0.5": [0, 0, 0]
                },
                "position": {
                    "0.0": [0, 0, 0],
                    "0.2083": [0, 0, 1],
                    "0.25": [0, 0, 0],
                    "0.375": [0, 0, 2],
                    "0.5": [0, 0, 0]
                }
            },
            "LegRightMesh": {
                "rotation": {
                    "0.25": [0, 0, 0],
                    "0.375": [32.5, 0, 0],
                    "0.5": [0, 0, 0]
                },
                "position": {
                    "0.0": [0, 0, 0],
                    "0.2083": [0, 0, 1],
                    "0.25": [0, 0, 0],
                    "0.375": [0, -0.6, 1],
                    "0.4583": [0, -1, 0],
                    "0.5": [0, 0, 0]
                }
            }
        }
    });
};
