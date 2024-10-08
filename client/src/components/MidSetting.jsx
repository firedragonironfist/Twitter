import React, { useState } from "react";
import { HeartCrack } from "lucide-react";
import { KeyRound } from "lucide-react";
import { User } from "lucide-react";
import { ChevronRight } from "lucide-react";
import AccountInfoPopup from "../components/popup/AccountInfoPopup";
import PasswordChangePopup from "../components/popup/PasswordChangePopup";
import DeleteAccountPopup from "../components/popup/DeleteAccountPopup";

function MidSetting() {
  const [isAccountInfoPopupVisible, setIsAccountInfoPopupVisible] =
    useState(false);
  const [isPasswordChangePopupVisible, setIsPasswordChangePopupVisible] =
    useState(false);
  const [isDeleteAccountPopupVisible, setIsDeleteAccountPopupVisible] =
    useState(false);
  return (
    <div class="flex-col w-1/3 text-white bg-black h-full flex border-l-2 border-r-2 border-[#283036] overflow-y-auto ">
      <div className="flex flex-col mt-4 space-y-7 pl-2">
        <h1 className="text-3xl font-bold">Your Account</h1>
        <p className="text-xl font-regular">
          See Information about your account
        </p>
        {/* Account Information */}
        <div
          className="flex flex-row space-x-2 cursor-pointer"
          onClick={() => setIsAccountInfoPopupVisible(true)}
        >
          <div>
            <User />
          </div>
          <div>Account Information</div>
          <div>
            <ChevronRight />
          </div>
        </div>

        {/* Password Change */}
        <div
          className="flex flex-row space-x-2 cursor-pointer"
          onClick={() => setIsPasswordChangePopupVisible(true)}
        >
          <div>
            <KeyRound />
          </div>
          <div>Change Your Password</div>
          <div>
            <ChevronRight />
          </div>
        </div>

        {/* Delete Account */}
        <div
          className="flex flex-row space-x-2 cursor-pointer"
          onClick={() => setIsDeleteAccountPopupVisible(true)}
        >
          <div>
            <HeartCrack />
          </div>
          <div>Delete Account</div>
          <div>
            <ChevronRight />
          </div>
        </div>

        {isAccountInfoPopupVisible && (
          <AccountInfoPopup
            onClose={() => setIsAccountInfoPopupVisible(false)}
          />
        )}
        {isPasswordChangePopupVisible && (
          <PasswordChangePopup
            onClose={() => setIsPasswordChangePopupVisible(false)}
          />
        )}
        {isDeleteAccountPopupVisible && (
          <DeleteAccountPopup
            onClose={() => setIsDeleteAccountPopupVisible(false)}
          />
        )}
      </div>
    </div>
  );
}

export default MidSetting;
