// src/shared/ui/LinkTG/LinkTG.tsx
import cl from "./linkTG.module.scss";
import { TelegramIcon } from "@/shared/assets/svg/TelegramIcon";
import { memo } from "react";

interface LinkTGProps {
  channelName?: string;
  channelUrl?: string;
  className?: string;
}

export const LinkTG: React.FC<LinkTGProps> = memo(
  ({
    channelName = "React Developer",
    channelUrl = "https://t.me/reactify_IT",
    className,
  }) => {
    const containerClass = className ? `${cl.linkTG} ${className}` : cl.linkTG;

    return (
      <div className={containerClass}>
        <TelegramIcon />
        <p>
          Подпишись на{" "}
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={`Телеграм канал ${channelName}`}
          >
            {channelName}
          </a>{" "}
          в телеграм
        </p>
      </div>
    );
  }
);
