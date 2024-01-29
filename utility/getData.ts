
export async function getData({ endPoint,id }: { id?: string, endPoint: string }) {
    let url: string = ""
    if (id) {
        url = `${process.env.NEXT_PUBLIC_SERVER_URL}/${endPoint}/${id}?populate=*`
    }  else {
        url = `${process.env.NEXT_PUBLIC_SERVER_URL}/${endPoint}/?populate=*`
    }

    const res = await fetch(url, { cache: 'no-store' })

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}




