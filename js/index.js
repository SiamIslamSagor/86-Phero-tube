// start:-

const loadData = async () => {
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
};

//
const handleCategory = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await res.json();
  console.log(data);
};
loadData();
handleCategory(1000);
