export function imageLink(id: string = '') {
    return `https://imagedelivery.net/${process.env.NEXT_PUBLIC_ID_CLOUDFLARE}/${id}/public`
}