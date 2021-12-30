// 現在の時間を返す
export async function onRequestGet(request) {
    return new Response(new Date().toISOString());
}