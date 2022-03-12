import sanityClient from "@sanity/client";

export default class SanityService {
  _client = sanityClient({
    dataset: 'production',
    //santiy 고유한 프로젝트 아이디를 가져오면 된다.
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: process.env.NODE_ENV === "production",
  });

//비동기 처리이기 때문에 await을 붙여준다.
  async getHome() {
    return await this._client.fetch(
      `*[_type == 'home'][0]{'mainPostUrl': mainPost -> slug.current}`
    );
  }

  async getPosts() {
    return await this._client.fetch(
      `*[_type == 'post']{
      title, 
      subtitle, 
      createdAt, 
      'content': content[]{
        ...,
        ...select(_type == 'imageGallery' => {'images': images[]{..., 'url': asset -> url}})
      },
      'slug': slug.current,
      'thumbnail': {
        'alt': thumbnail.alt,
        'imageUrl': thumbnail.asset -> url
      },
      'author': author -> {
        name,
        role,
        'image': image.asset -> url
      },
      'tag': tag -> {
        title,
        'slug': slug.current
      }
    }`);
  }

}