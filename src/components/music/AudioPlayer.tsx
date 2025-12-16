"use client";

import React, { useRef, useState, useEffect } from "react";
import { Flex, IconButton, Text, SmartImage } from "@/once-ui/components";
import styles from "./AudioPlayer.module.scss";

interface AudioPlayerProps {
    title: string;
    src: string;
    cover?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, src, cover }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const setAudioData = () => {
            setDuration(audio.duration);
            setCurrentTime(audio.currentTime);
        }

        const setAudioTime = () => {
            setCurrentTime(audio.currentTime);
        }

        // Add event listeners
        audio.addEventListener("loadeddata", setAudioData);
        audio.addEventListener("timeupdate", setAudioTime);
        audio.addEventListener("ended", () => setIsPlaying(false));

        return () => {
            audio.removeEventListener("loadeddata", setAudioData);
            audio.removeEventListener("timeupdate", setAudioTime);
            audio.removeEventListener("ended", () => setIsPlaying(false));
        }
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!audioRef.current) return;
        const time = Number(e.target.value);
        audioRef.current.currentTime = time;
        setCurrentTime(time);
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    };

    return (
        <Flex
            fillWidth
            padding="m"
            gap="m"
            vertical="center"
            className={styles.player}
            background="surface"
        >
            <audio ref={audioRef} src={src} preload="metadata" />

            {cover && (
                <SmartImage
                    src={cover}
                    alt={`${title} cover`}
                    width={6}
                    height={5}
                    radius="s"
                    objectFit="cover"
                />
            )}

            <IconButton
                icon={isPlaying ? "pause" : "play"}
                onClick={togglePlay}
                variant="ghost"
                size="l"
                tooltip={isPlaying ? "Pause" : "Play"}
            />

            <Flex direction="column" fillWidth gap="4">
                <Flex fillWidth horizontal="space-between">
                    <Text variant="body-strong-s">{title}</Text>
                    <Text variant="body-default-xs" onBackground="neutral-weak">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </Text>
                </Flex>

                <input
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    onChange={handleSeek}
                    className={styles.slider}
                />
            </Flex>
        </Flex>
    );
};
