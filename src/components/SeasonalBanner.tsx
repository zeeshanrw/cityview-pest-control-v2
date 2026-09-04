import { BUSINESS } from "@/lib/constants";

const PROMO_ACTIVE = true;

export default function SeasonalBanner() {
  return (
    <div className="bg-signal text-ink">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span className="text-sm font-medium">
          {PROMO_ACTIVE
            ? "Summer is here - and so are the pests. Call now to book and get 15% off your quoted price."
            : "Wasp and hornet calls are up across the GTA - don't wait for a sting."}
        </span>

        <a
          href={BUSINESS.phoneHref}
          className="text-sm font-display font-semibold uppercase underline underline-offset-2 hover:no-underline"
        >
          Call {BUSINESS.phone}
        </a>
      </div>
    </div>
  );
}
