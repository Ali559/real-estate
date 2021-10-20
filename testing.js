const allInteriors = [
    "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540alibarznji%252Freal-estate-app/ImagePicker/f8fabb30-14d1-4fe6-9900-1e30c21d3925.jpg",
    "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540alibarznji%252Freal-estate-app/ImagePicker/3702cc59-88b3-47cf-9f10-bcce890796c3.jpg",
    "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540alibarznji%252Freal-estate-app/ImagePicker/3702cc59-88b3-47cf-9f10-bcce890796c3.jpg",
    "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540alibarznji%252Freal-estate-app/ImagePicker/3702cc59-88b3-47cf-9f10-bcce890796c3.jpg",
]

const imgs = [ "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540alibarznji%252Freal-estate-app/ImagePicker/f8fabb30-14d1-4fe6-9900-1e30c21d3925.jpg", "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540alibarznji%252Freal-estate-app/ImagePicker/3702cc59-88b3-47cf-9f10-bcce890796c3.jpg", "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540alibarznji%252Freal-estate-app/ImagePicker/4c9687fd-629d-4d3c-ae82-22f878628028.jpg", "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540alibarznji%252Freal-estate-app/ImagePicker/5ec965ab-7038-4877-95b8-741e7f14efe6.jpg", "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540alibarznji%252Freal-estate-app/ImagePicker/ddd2094f-0dd3-49a1-817f-04e77875cbe6.jpg" ];
const isUnique = allInteriors.includes(allInteriors.lastItem);
let unique = [];
allInteriors.forEach(items => {
    items.includes('f8fabb30-14d1-4fe6-9900-1e30c21d3925.jpg') ? console.log('nope') : unique.push(items);
})

