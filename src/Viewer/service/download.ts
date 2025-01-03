export const downloadUziImage = async (uzi_id: string, image_id: string) => {
    const response = await fetch(`http://194.226.121.145:8080/api/download/uzi/${uzi_id}/image/${image_id}`, {
        headers: {
            token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzU5Mjk5ODAsIngtdXNlcl9pZCI6IjM4ODQxNmU3LWViMGYtNDJiZS1hNzViLTdkMTNlNzdmOWVmYiJ9.miqbiMES2UBTJdKyy33TNCdNJzsT_1ccs_XyYPeL7ZPQqNYe1lVNfC0t2_2nzI6GYUARFmsj6KLDNHYEkdRJ4th1TUCJxv5kcrKUCgwSqSP5df8oufowFtJ5kMaBOJiTTupe4Hd7-EK-o2LwLsj40KA0dkwJ880SC0g5qZSD5upnQSWK3KHAr1YzMOmYwjANEaps8ydmy-UctSKplsw_JIchAzYEU53bxeyEEPmny5CwTkNs6AnXMVABnnZjPAHGtsaVrDYUqHZgvrta5yWmJ73bFrmlQbLJ5WaLowHoSzL-iluakxNM_hXcDx7Qa6Duw5Szm97Zp3rPkKnPypoegw'
        }
    })

    if (response.status === 200) {
        const blob = await response.blob();

        return window.URL.createObjectURL(blob);
    }

    return null;
}
