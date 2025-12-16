import Script from "next/script";
import { Flex, Heading, Text, Column, IconButton } from "@/once-ui/components";
import { AudioPlayer } from "@/components/music/AudioPlayer";
import { baseURL } from "@/app/resources";
import { music, person } from "@/app/resources/content";

export async function generateMetadata() {
    const title = music.title;
    const description = music.description;
    const ogImage = `https://${baseURL}/images/cover.png`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
            url: `https://${baseURL}/music`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function Music() {
    return (
        <Column maxWidth="m" fillWidth gap="l">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        headline: music.title,
                        description: music.description,
                        url: `https://${baseURL}/music`,
                        author: {
                            "@type": "Person",
                            name: person.name,
                        },
                    }),
                }}
            />
            <Text variant="body-default-l" marginBottom="l">{music.description}</Text>

            <Flex gap="16" marginBottom="32">
                {music.social.map((socialLink) => (
                    <IconButton
                        key={socialLink.name}
                        icon={socialLink.icon}
                        href={socialLink.link}
                        tooltip={socialLink.name}
                        variant="ghost"
                        size="l"
                    />
                ))}
            </Flex>

            <Column fillWidth gap="m" marginBottom="xl">
                <Heading variant="heading-strong-l" marginBottom="m">Original Beats</Heading>
                <Flex direction="column" gap="l" fillWidth>
                    {music.audio.length > 0 ? (
                        music.audio.map((track, index) => (
                            <AudioPlayer key={index} src={track.src} title={track.title} cover={track.cover} />
                        ))
                    ) : (
                        <Text>No tracks added yet.</Text>
                    )}
                </Flex>
            </Column>

            <Column fillWidth gap="m" marginBottom="xl">
                <Heading variant="heading-strong-l" marginBottom="m">Piano Covers</Heading>
                <Flex direction="row" mobileDirection="column" gap="l" fillWidth wrap horizontal="center">
                    {music.embeds && music.embeds.map((embed, index) => (
                        <Flex key={index} horizontal="center">
                            <div dangerouslySetInnerHTML={{ __html: embed.html }} />
                        </Flex>
                    ))}
                </Flex>
            </Column>
        </Column>
    );
}
