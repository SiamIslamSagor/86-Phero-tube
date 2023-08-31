// start:-

const loadData = async () => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/categories`
    );
    data = await res.json();
    //   console.log(data);
    const allCategoryData = data.data;
    //   console.log(allCategoryData);
    const tabContainer = document.getElementById("category-tab-container");

    allCategoryData.forEach((singleCategory) => {
      const div = document.createElement("div");
      div.innerHTML = `
    <a onclick="handleCategory(${singleCategory?.category_id})" class="btn" href="#">${singleCategory.category}</a>
    `;
      tabContainer.appendChild(div);
      // console.log(singleCategory?.category_id);
    });
  } catch (error) {
    console.log("ERR:" + error);
  }
};

//

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g clip-path="url(#clip0_11_290)">
    <path d="M19.375 10C19.375 10.8 18.3922 11.4594 18.1953 12.1969C17.9922 12.9594 18.5063 14.0219 18.1203 14.6891C17.7281 15.3672 16.5484 15.4484 15.9984 15.9984C15.4484 16.5484 15.3672 17.7281 14.6891 18.1203C14.0219 18.5063 12.9594 17.9922 12.1969 18.1953C11.4594 18.3922 10.8 19.375 10 19.375C9.2 19.375 8.54062 18.3922 7.80312 18.1953C7.04062 17.9922 5.97813 18.5063 5.31094 18.1203C4.63281 17.7281 4.55156 16.5484 4.00156 15.9984C3.45156 15.4484 2.27187 15.3672 1.87969 14.6891C1.49375 14.0219 2.00781 12.9594 1.80469 12.1969C1.60781 11.4594 0.625 10.8 0.625 10C0.625 9.2 1.60781 8.54062 1.80469 7.80312C2.00781 7.04062 1.49375 5.97813 1.87969 5.31094C2.27187 4.63281 3.45156 4.55156 4.00156 4.00156C4.55156 3.45156 4.63281 2.27187 5.31094 1.87969C5.97813 1.49375 7.04062 2.00781 7.80312 1.80469C8.54062 1.60781 9.2 0.625 10 0.625C10.8 0.625 11.4594 1.60781 12.1969 1.80469C12.9594 2.00781 14.0219 1.49375 14.6891 1.87969C15.3672 2.27187 15.4484 3.45156 15.9984 4.00156C16.5484 4.55156 17.7281 4.63281 18.1203 5.31094C18.5063 5.97813 17.9922 7.04062 18.1953 7.80312C18.3922 8.54062 19.375 9.2 19.375 10Z" fill="#2568EF"/>
    <path d="M12.7094 7.20626L9.14065 10.775L7.29065 8.92657C6.88909 8.52501 6.23752 8.52501 5.83596 8.92657C5.4344 9.32814 5.4344 9.9797 5.83596 10.3813L8.43127 12.9766C8.8219 13.3672 9.45627 13.3672 9.8469 12.9766L14.1625 8.66095C14.5641 8.25939 14.5641 7.60782 14.1625 7.20626C13.761 6.8047 13.111 6.8047 12.7094 7.20626Z" fill="#FFFCEE"/>
  </g>
  <defs>
    <clipPath id="clip0_11_290">
      <rect width="20" height="20" fill="white"/>
    </clipPath>
  </defs>
</svg>`;

const handleCategory = async (categoryObject) => {
  //
  //   console.log(categoryObject);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryObject}`
  );
  const data = await res.json();
  //   console.log(data);s
  const categoryArray = data.data;
  //   console.log(categoryArray.length);
  const videoContainer = document.getElementById("video-card-container");
  if (categoryArray.length === 0) {
    videoContainer.classList = ``;
    // console.log(videoContainer.classList);
    const div = document.createElement("div");
    /* div.innerHTML = `
   <h3 class="text-4xl font-bold mt-4">
     Oops!! Sorry, There is no
     <br />
     content here
    </h3>
    `; */
    videoContainer.appendChild(div);
    console.log(900000);
  }

  videoContainer.innerHTML = ``;
  categoryArray.forEach((videoData) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card card-compact w-[312px] bg-base-100">
    <figure>
      <img
        class="w-[312px] h-[200px] rounded-2xl"
        src="${videoData?.thumbnail}"
        alt="Shoes"
      />
    </figure>
    <div class="flex flex-col my-4">
      <div class="flex">
        <div>
          <img
            class="h-10 w-10 rounded-full mr-3"
            src="${videoData?.authors[0].profile_picture}"
            alt=""
          />
        </div>
        <h2 class="card-title">${videoData?.title}</h2>
      </div>
      <p class = 'flex items-center'> ${
        videoData?.authors[0]?.profile_name
      }<span class = 'pl-2'>${
      videoData?.authors[0]?.verified ? svgIcon : ""
    }</span></p>
      <p>${videoData?.others?.views}</p>
    </div>
  </div>
    `;
    videoContainer.classList = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-12 justify-items-center`;
    videoContainer.appendChild(div);
  });
};
loadData();
handleCategory(1000);
