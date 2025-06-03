<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MinifyHtml
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        if ($response instanceof \Illuminate\Http\Response) {
            $signature = "\n<!-- Created by: Ömer İslamoğlu ~ TrinsyCa ~ https://trinsyca.com -->\n\n";
            $content = $signature . minify_html($response->getContent());
            $response->setContent($content);
        }
        return $response;
    }
}