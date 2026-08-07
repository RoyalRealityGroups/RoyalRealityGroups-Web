// Centralized API configuration for lead submission
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8011';

// Read access token from localStorage/sessionStorage
function getAccessToken(): string | null {
  return localStorage.getItem("access_token") || sessionStorage.getItem("access_token");
}

export interface LeadPayload {
  name: string;
  mobile: string;
  email?: string;
  lead_source: "WEBSITE" | "FACEBOOK" | "INSTAGRAM" | "GOOGLE_ADS" | "WHATSAPP" | "MAGICBRICKS" | "99ACRES" | "REFERRALS" | "MANUAL";
  budget?: string;
  preferred_area?: string;
  property_requirement?: string;
  remarks?: string;
}

export async function submitLead(data: LeadPayload): Promise<{ success: boolean; error?: string }> {
  try {
    const token = getAccessToken();
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}/api/lead/leads/`, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const errorMsg =
        errorData?.detail ||
        errorData?.mobile?.[0] ||
        errorData?.name?.[0] ||
        Object.values(errorData || {})?.[0] ||
        "Failed to submit. Please try again.";
      return { success: false, error: String(errorMsg) };
    }

    return { success: true };
  } catch (error: any) {
    return { success: false, error: "Network error. Please check your connection." };
  }
}
