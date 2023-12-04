document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("list");
    const yearFilter = document.getElementById("yearFilter");
    const typeFilter = document.getElementById("typeFilter");
  
    const albums = [
      { type: "singles", name: "Let's Ghost", image: "images/LetsGhost.jpg", date: "2023-11-05", description: "第十回博麗神社秋季例大祭「Let's Ghost」特設ページを公開致しました。",year: "2023" },
      { type: "cds", name: "二曲入り限定おまけCD", image: "images/2023SummerBooth.jpg", date: "2023-08-04", description: "A bonus CD released alongside KONNGARAGIRL",year: "2023" },
      { type: "albums", name: "KONNAGARAGIRL", image: "images/Konnagaragirl.jpg", date: "2023-08-04", description: "2023夏新譜「KONNGARAGIRL」特設ページを公開致しました",year: "2023" },
      { type: "cds", name: "第二十回博麗神社例大祭会場限定おまけCD", image: "images/20Reitaisai.jpg", date: "2023-05-02", description: "A bonus CD released alongside 生生世世",year: "2023" },
      { type: "albums", name: "生生世世", image: "images/Shoujouseze.jpg", date: "2023-05-02", description: "例大祭２０「生生世世」特設ページを公開致しました",year: "2023" },
      { type: "cds", name: "2022年冬季BOOTH限定おまけCD", image: "images/101Comiket.jpg", date: "2022-12-23", description: "A bonus CD released alongside B-Sides & Rarities",year: "2022" },
      { type: "albums", name: "B-Sides & Rarities", image: "images/BSidesnRarities.jpg", date: "2022-12-23", description: "2022冬新譜「B-Sides & Rarities」特設ページを公開致しました。",year: "2022" },
      { type: "singles", name: "ポップンドリィ", image: "images/PopNDolly.jpg", date: "2022-10-16", description: "秋季例大祭９「ポップンドリィ」特設ページを公開致しました。",year: "2022" },
      { type: "singles", name: "あのこがほしい", image: "images/AnoGahoshii.jpg", date: "2022-10-06", description: "秋季例大祭９「ポップンドリィ」特設ページを公開致しました。",year: "2022" },
      { type: "albums", name: "AKATSUKI", image: "images/Akatsuki.jpg", date: "2022-08-07", description: "C100「AKATSUKI」特設ページを公開致しました。",year: "2022" },
      { type: "cds", name: "会場&BOOTH限定おまけCD", image: "images/100Comiket.jpg", date: "2023-08-04", description: "A bonus CD released alongside S.A.R.I.E.L",year: "2022"},
      { type: "albums", name: "S.A.R.I.E.L", image: "images/SARIEL.jpg", date: "2022-08-07", description: "C100「S.A.R.I.E.L. -Request Song Jukebox Vol.01- 特設ページを公開致しました。",year: "2022" },
      { type: "cds", name: "第十九回博麗神社例大祭会場&BOOTH限定おまけCD", image: "images/19Reitaisai.jpg", date: "2022-05-02", description: "A bonus CD released alongside LIMITED SINGLES season3",year: "2022"},
      { type: "singles", name: "LIMITED SINGLES season3", image: "images/LimitedSinglesS3.jpg", date: "2022-05-02", description: "例大祭１９「LIMITED SINGLES season3」 特設ページを公開致しました。",year: "2022" },
      { type: "singles", name: "ヤムヤムヤミー", image: "images/Yumyumyummy.jpg", date: "2022-05-02", description: "例大祭１９ヤムヤムヤミー」 特設ページを公開致しました。",year: "2022" },
      { type: "cds", name: "新C99会場&BOOTH限定おまけCD", image: "images/99Comiket.jpg", date: "2021-12-24", description: "A bonus CD released alongside こ～んさるたん！",year: "2021"},
      { type: "albums", name: "こ～んさるたん！", image: "images/Coooonsultant.jpg", date: "2021-12-24", description: "C99「こ～んさるたん！」特設ページを公開致しました。",year: "2021" },
      { type: "singles", name: "Black Mirror on the Wall", image: "images/BlackMirrorOnTheWall.jpg", date: "2021-10-18", description: "第八回博麗神社秋季例大祭「Black Mirror on the Wall」特設ページを公開致しました。",year: "2021" },
      { type: "cds", name: "SUMMER2021限定おまけCD", image: "images/2021Summer.jpg", date: "2021-08-09", description: "A bonus CD released alongside HELLOHELL",year: "2021"},
      { type: "albums", name: "HELLOHELL", image: "images/HELLOHELL.jpg", date: "2021-08-09", description: "夏の新譜アルバム「HELLOHELL」特設ページを公開致しました。",year: "2021" }
    ];
  
    function displayAlbums(albumsToShow) {
      list.innerHTML = "";
      var currdate = ""
      var container
      albumsToShow.forEach(album => {
        const albumDiv = document.createElement("div");
        albumDiv.classList.add("album");

        
        if (album.year !== currdate) {     // Create year seperation
          currdate = album.year
          container = document.createElement("div");
          container.classList.add("album_container");

          const titleYear = document.createElement("div");
          titleYear.classList.add("title");

          const box = document.createElement("div");
          box.classList.add("box")

          const title = document.createElement("h1")
          title.innerHTML = currdate

          const line = document.createElement("div");
          line.classList.add("line")

          titleYear.appendChild(box)
          titleYear.appendChild(title)
          list.append(titleYear)
          list.appendChild(line)
          list.appendChild(container)
        }
        const imgDiv = document.createElement("div")

        const albumImage = document.createElement("img");
        albumImage.classList.add("image")
        albumImage.src = album.image;
        albumImage.alt = album.name;
  
        const albumTitle = document.createElement("h3");
        albumTitle.textContent = album.name;
        albumTitle.classList.add("name");

        const infoDiv = document.createElement("div")
        infoDiv.classList.add("info");

        const detailsDiv = document.createElement("div")
        detailsDiv.classList.add("details");

        const albumDate = document.createElement("p");
        albumDate.textContent = `Date: ${album.date}`;
        albumDate.classList.add("date");

        const desc = document.createElement("p");
        desc.innerHTML = album.description
  
        imgDiv.appendChild(albumImage);

        detailsDiv.appendChild(albumTitle);
        detailsDiv.appendChild(albumDate);

        infoDiv.appendChild(detailsDiv);
        infoDiv.appendChild(desc)

        albumDiv.appendChild(imgDiv);
        albumDiv.appendChild(infoDiv)
        container.appendChild(albumDiv);
      });
    }
  
    function filter(selectedYear,selectedType) {
      var filteredAlbums = selectedYear === "all" ? albums : albums.filter(album => album.year == selectedYear);
      const newfilteredAlbums = selectedType === "all" ? filteredAlbums : filteredAlbums.filter(album => album.type == selectedType);
      displayAlbums(newfilteredAlbums);
    }
  
    // Event listener for the filters
    yearFilter.addEventListener("change", function () {
      filter(yearFilter.value,typeFilter.value);
    });

    typeFilter.addEventListener("change", function () {
      filter(yearFilter.value,typeFilter.value);
    });

    filter("all","all");
  });
