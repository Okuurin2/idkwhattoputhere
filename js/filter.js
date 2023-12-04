document.addEventListener("DOMContentLoaded", function () {
    const itemList = document.getElementById("item_list");
    const filter = document.getElementById("filter");
  
    const items = [
        { type: "singles", name: "Let's Ghost", image: "images/LetsGhost.jpg", date: "2023-11-05", description: "第十回博麗神社秋季例大祭「Let's Ghost」特設ページを公開致しました。" },
        { type: "cds", name: "二曲入り限定おまけCD", image: "images/2023SummerBooth.jpg", date: "2023-08-04", description: "A bonus CD released alongside KONNGARAGIRL" },
        { type: "albums", name: "KONNAGARAGIRL", image: "images/Konnagaragirl.jpg", date: "2023-08-04", description: "2023夏新譜「KONNGARAGIRL」特設ページを公開致しました" },
        { type: "cds", name: "第二十回博麗神社例大祭会場限定おまけCD", image: "images/20Reitaisai.jpg", date: "2023-05-02", description: "A bonus CD released alongside 生生世世"},
        { type: "albums", name: "生生世世", image: "images/Shoujouseze.jpg", date: "2023-05-02", description: "例大祭２０「生生世世」特設ページを公開致しました" },
        { type: "cds", name: "2022年冬季BOOTH限定おまけCD", image: "images/101Comiket.jpg", date: "2022-12-23", description: "A bonus CD released alongside B-Sides & Rarities" },
        { type: "albums", name: "B-Sides & Rarities", image: "images/BSidesnRarities.jpg", date: "2022-12-23", description: "2022冬新譜「B-Sides & Rarities」特設ページを公開致しました。" },
        { type: "singles", name: "ポップンドリィ", image: "images/PopNDolly.jpg", date: "2022-10-16", description: "秋季例大祭９「ポップンドリィ」特設ページを公開致しました。" },
        { type: "singles", name: "あのこがほしい", image: "images/AnoGahoshii.jpg", date: "2022-10-06", description: "秋季例大祭９「ポップンドリィ」特設ページを公開致しました。" },
        { type: "albums", name: "AKATSUKI", image: "images/Akatsuki.jpg", date: "2022-08-07", description: "C100「AKATSUKI」特設ページを公開致しました。" },
        { type: "cds", name: "会場&BOOTH限定おまけCD", image: "images/100Comiket.jpg", date: "2023-08-04", description: "A bonus CD released alongside S.A.R.I.E.L"},
        { type: "albums", name: "S.A.R.I.E.L", image: "images/SARIEL.jpg", date: "2022-08-07", description: "C100「S.A.R.I.E.L. -Request Song Jukebox Vol.01- 特設ページを公開致しました。" },
        { type: "cds", name: "第十九回博麗神社例大祭会場&BOOTH限定おまけCD", image: "images/19Reitaisai.jpg", date: "2022-05-02", description: "A bonus CD released alongside LIMITED SINGLES season3"},
        { type: "singles", name: "LIMITED SINGLES season3", image: "images/LimitedSinglesS3.jpg", date: "2022-05-02", description: "例大祭１９「LIMITED SINGLES season3 特設ページを公開致しました。" },
        { type: "singles", name: "ヤムヤムヤミー", image: "images/Yumyumyummy.jpg", date: "2022-05-02", description: "例大祭１９「LIMITED SINGLES season3 特設ページを公開致しました。" },
        { type: "announcements", name: "Announcement", date: "2022-04-04", description: "5月8日 （日）東京ビッグサイトで開催されます第十九回博麗神社例大祭「い24ab」にスペースを頂きました。" },
        { type: "cds", name: "新C99会場&BOOTH限定おまけCD", image: "images/99Comiket.jpg", date: "2021-12-24", description: "A bonus CD released alongside こ～んさるたん！"},
        { type: "albums", name: "こ～んさるたん！", image: "images/Coooonsultant.jpg", date: "2021-12-24", description: "C99「こ～んさるたん！」特設ページを公開致しました。" },
        { type: "singles", name: "Black Mirror on the Wall", image: "images/BlackMirrorOnTheWall.jpg", date: "2021-10-18", description: "第八回博麗神社秋季例大祭「Black Mirror on the Wall」特設ページを公開致しました。" },
        { type: "cds", name: "SUMMER2021限定おまけCD", image: "images/2021Summer.jpg", date: "2021-08-09", description: "A bonus CD released alongside HELLOHELL"},
        { type: "albums", name: "HELLOHELL", image: "images/HELLOHELL.jpg", date: "2021-08-09", description: "夏の新譜アルバム「HELLOHELL」特設ページを公開致しました。" },
        { type: "announcements", name: "Announcement", date: "2022-07-29", description: "株式会社タイトー様『東方スペルバブル』の追加ダウンロードコンテンツ「暁Records楽曲パック」が配信開始いたしました。https://www.taito.co.jp/mob/topics/14871" },
      ];
    
  
    function addItems(filter) {
      const filteredItems = filter === "all" ? items : items.filter(item => item.type === filter);
      itemList.innerHTML = "";
      filteredItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item",item.type);
  
        if (item.image) {
            const imgDiv = document.createElement("div");
            imgDiv.classList.add("item_img");

            const newImage = document.createElement("img");
            newImage.src = item.image;
            newImage.alt = item.name;
            imgDiv.appendChild(newImage);
            itemDiv.appendChild(imgDiv);
        }
  
        const newDiv = document.createElement("div");
        newDiv.classList.add("item_info");

        const detailsDiv = document.createElement("div");
        detailsDiv.classList.add("item_details");

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("titlediv")
        
        const box = document.createElement("div");
        box.classList.add("box");

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        itemName.classList.add("item_name");
        
        const itemDate = document.createElement("p");
        itemDate.textContent = `Date: ${item.date}`;
        itemDate.classList.add("item_date");
  
        const itemDesc = document.createElement("p");
        itemDesc.textContent = item.description;
        
        titleDiv.appendChild(box);
        titleDiv.appendChild(itemName);
        detailsDiv.appendChild(titleDiv)
        detailsDiv.appendChild(itemDate);

        newDiv.appendChild(detailsDiv);
        newDiv.appendChild(itemDesc);

        itemDiv.appendChild(newDiv);
  
        itemList.appendChild(itemDiv);
      });
    }
  
    filter.addEventListener("change", function () {
      addItems(filter.value);
    });
  
    addItems("all");
  });