"use client";

import { Plus } from "lucide-react";

import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";
import React, { useCallback } from "react";

export const NavigationAction = () => {
  const { onOpen } = useModal();

  const handleOpen = useCallback(() => {
    onOpen("createServer");
  }, [onOpen]);

  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        <button onClick={handleOpen} className="group flex items-center">
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[16px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-[#66FCF1]">
            <Plus
              className="group-hover:text-white transition text-[#45A29E]"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};
