// Only an embedded same-origin planner can request a deterministic PNG.
export function installQuotationCapture(capture) {
    window.addEventListener('message', async event => {
        if (window.parent === window || event.source !== window.parent ||
            (location.protocol !== 'file:' && event.origin !== location.origin) ||
            event.data?.type !== 'qnex-quotation-capture' || typeof event.data.id !== 'string') return;
        const reply = {type:'qnex-quotation-image',id:event.data.id};
        try { Object.assign(reply, await capture(event.data)); }
        catch (error) { reply.error = error.message || '3D capture failed'; }
        event.source.postMessage(reply, event.origin === 'null' ? '*' : event.origin);
    });
}

export function captureOverview(scene, title) {
    if (!scene?.renderer) throw new Error('3D scene is not ready');
    scene.setTheme('light');
    scene.renderer.setPixelRatio(1);
    scene.renderer.setSize(1440,1000,false);
    scene.camera.aspect=1440/1000;
    scene.camera.up.set(0,1,0);
    scene.camera.updateProjectionMatrix();
    scene.viewTween=null;
    scene.setView('overview',true);
    scene.controls.update();
    scene.renderer.render(scene.scene,scene.camera);
    const output=document.createElement('canvas');output.width=1440;output.height=1000;
    const ctx=output.getContext('2d');ctx.drawImage(scene.canvas,0,0,1440,1000);
    ctx.fillStyle='rgba(255,255,255,.94)';ctx.fillRect(16,16,1408,44);
    ctx.fillStyle='#17324d';ctx.font='bold 20px Arial';ctx.fillText(title,30,46);
    return {data:output.toDataURL('image/png'),width:1440,height:1000,view:'overview',upright:true};
}
