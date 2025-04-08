
/**
 * Parse a string to boolean safely
 */
export default function parseBoolean(value: string | undefined): boolean {
    if (!value) return false;

    try {
        return JSON.parse(value.toLowerCase()) === true;
    } catch {
        return false;
    }
}
