// utils/generateUrl.js

export const generateUrl = (
    baseUrl,
    searchParams,
    page,
    pageSize,
    searchQuery
) => {
    if (!searchParams.toString().includes("page")) {
        searchParams.set("page", page);
        searchParams.set("pageSize", pageSize);
    }

    let url = `${baseUrl}?fields=title,description,image,slug,createdAt&${searchParams.toString()}`;

    if (searchQuery) {
        url += `&searchQuery=${searchQuery}`;
    }

    return url;
};
