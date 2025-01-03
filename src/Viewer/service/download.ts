export const downloadUziImage = async (uzi_id: string, image_id: string) => {
    const response = await fetch(`http://194.226.121.145:8080/api/download/uzi/${uzi_id}/image/${image_id}`, {
        headers: {
            token: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzU5NDI1NjAsIngtdXNlcl9pZCI6IjM4ODQxNmU3LWViMGYtNDJiZS1hNzViLTdkMTNlNzdmOWVmYiJ9.q8Od7J_nJNUfc7D0sQu0cC1MHdectxHuUV7Dye_TrplS7yIVqgXfPprffXfRRUyHAxRuWZpYpwTO1EMojzAIqEocc_JpbUdUwS0aaCT1C-PoY9XerQi0Lm7D2ZhuiWB0cip36pLg--gYyL2cXtInBxx2zCq0WicaBwDPxwdR4yDzCv6Kiqnts-ASYVZAx4zPigHwgbuxFEc43kPiVQrkXWLHZp0ZiMnQ3mM0xop-Wn7jmAZwFLwg4I5JYZlHn9lZJuvyB3XhwqfJ4Si8x8qG-raQUYTc5v65SPUZbjg-U751UFw-I9DARm0gXyFROTLBBhOkHSRSxQCzigm9hazogQ'
        }
    })

    if (response.status === 200) {
        const blob = await response.blob();

        return window.URL.createObjectURL(blob);
    }

    return null;
}
